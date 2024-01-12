import {
  Center,
  Text,
  Input,
  Button,
  View,
  Image,
  useToast,
  FormControl,
} from "native-base";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import API from "../../constants/Api";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Login } from "../../store/actions";
import { Formik } from "formik";
import * as Yup from "yup";

const validateScheme = Yup.object({
  email: Yup.string().required("Vui lòng điền email"),
  password: Yup.string().required("Vui lòng điền mật khẩu"),
});
const initFormValue = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [isValidateOnChange, setIsValidateOnChange] = useState(false);
  const [show, setShow] = useState(false);
  const showClick = () => setShow(!show);
  const dispatch = useDispatch();
  async function handleLogin(values) {
    try {
      setLoading(true);
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.error) {
        toast.show({ description: data.error.message });
        console.log(data.error);
        return;
      }
      dispatch(Login(data));
      console.log(data);
      toast.show({ description: "Đăng nhập thành công!" });
    } catch (error) {
      console.log(error);
      toast.show({ description: "Có lỗi xảy ra!" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Formik
      initialValues={initFormValue}
      validationSchema={validateScheme}
      onSubmit={(values) => handleLogin(values)}
      validateOnChange={isValidateOnChange}
    >
      {({
        handleSubmit,
        handleChange,
        errors,
        values,
        validateForm,
        setFieldValue,
      }) => (
        <Center p="5" m={4} flex={1}>
          <Text fontSize={22} marginBottom={"10"} fontWeight={"medium"}>
            Đăng nhập
          </Text>
          <FormControl isRequired isInvalid={!!errors.email}>
            <FormControl.Label>Tên tài khoản</FormControl.Label>
            <Input
              width={"300"}
              height={"10"}
              fontSize={"16"}
              variant="underlined"
              placeholder="Nhập email của bạn"
              value={values.email}
              onChangeText={handleChange("email")}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
            <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
          </FormControl>
          <FormControl mt={3} isRequired isInvalid={!!errors.password}>
            <FormControl.Label>Mật khẩu</FormControl.Label>
            <Input
              width={"300"}
              height={"10"}
              fontSize={"16"}
              placeholder="Nhập mật khẩu"
              value={values.password}
              onChangeText={handleChange("password")}
              variant="underlined"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
              type={show ? "text" : "password"}
              InputRightElement={
                <Button
                  pb={0}
                  backgroundColor={"transparent"}
                  justifyContent={"center"}
                  ml={1}
                  roundedLeft={0}
                  roundedRight="md"
                  onPress={showClick}
                >
                  {show ? (
                    <Ionicons name="eye-outline" size={24} color="black" />
                  ) : (
                    <Ionicons name="eye-off-outline" size={24} color="black" />
                  )}
                </Button>
              }
            />
            <FormControl.ErrorMessage>
              {errors.password}
            </FormControl.ErrorMessage>
          </FormControl>
          <Text
            fontSize={12}
            marginTop={2}
            fontStyle={"italic"}
            alignSelf={"flex-end"}
            marginRight={10}
            fontWeight={"light"}
          >
            Quên mật khẩu ?
          </Text>
          <Button
            onPress={() => {
              setIsValidateOnChange(true);
              validateForm().then(() => {
                handleSubmit();
              });
            }}
            fontSize={"16"}
            margin={"10"}
            borderRadius={"30"}
            background={"blue.400"}
            width={"300"}
          >
            ĐĂNG NHẬP
          </Button>
          <View marginBottom={10} flexDirection={"row"}>
            <Text>Chưa có tài khoản ? </Text>
            <Text
              color={"darkBlue.500"}
              onPress={() => navigation.navigate("signup")}
            >
              Đăng kí ngay{" "}
            </Text>
          </View>
        </Center>
      )}
    </Formik>
  );
}
