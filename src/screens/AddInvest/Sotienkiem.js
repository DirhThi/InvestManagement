import {
  View,
  Text,
  Select,
  Input,
  HStack,
  Button,
  ScrollView,
  FormControl,
  Toast,
} from "native-base";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import API from "../../constants/Api";

const validateScheme = Yup.object({
  ten: Yup.string().required("Vui lòng nhập tên sổ tiết kiệm"),
  sotien: Yup.number().required("Vui lòng nhập số tiền"),
  laisuat: Yup.number().required("Vui lòng nhập thời hạn"),
  thoihan: Yup.number().required("Vui lòng nhập thời hạn"),
});

const initFormValue = {
  ten: "",
  sotien: "",
  laisuat: "",
  thoihan: "",
};
export default function ThemSoTietKiem({ navigation }) {
  const token = useSelector((state) => state.Reducers.authToken);
  const [isValidateOnChange, setIsValidateOnChange] = useState(false);
  const user = JSON.parse(token);
  const [loaigiaodich, setloaigiaodich] = useState("Tiền lãi tiết kiệm");
  const [loading, setLoading] = useState(false);
  const [chuki, setChuki] = useState("30");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  async function handleThemSotietkiem(values) {
    try {
      setLoading(true);
      var dNow = new Date(date);
      var batdau =
        dNow.getFullYear() + "-" + (dNow.getMonth() + 1) + "-" + dNow.getDate();
      dNow.setDate(dNow.getDate() + chuki * values.thoihan);
      var ketthuc =
        dNow.getFullYear() + "-" + (dNow.getMonth() + 1) + "-" + dNow.getDate();
      const res = await fetch(`${API}/sotietkiem/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          batdau: batdau,
          ketthuc: ketthuc,
          user: user._id,
          chuki: chuki,
          conlai: values.sotien,
          trangthai: "Đang hoạt động",
        }),
      });
      const data = await res.json();
      if (data.error) {
        Toast.show({ description: data.error.message });
        console.log(data.error);
        return;
      }
      
     
      var dategd = new Date(batdau);
      for (var i = 1; i <= values.thoihan; i++) {
        dategd.setDate(dategd.getDate() + Number(chuki) );
        var thoigian =
          dategd.getFullYear() +
          "-" +
          (dategd.getMonth() + 1) +
          "-" +
          dategd.getDate();

        const res1 = await fetch(`${API}/lsgd/addlsstk`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loaigiaodich: loaigiaodich,
            sotien: Number(values.sotien)*(Number(values.laisuat)/100),
            thoigian: thoigian,
            quy: data._id,
          }),
        });
        const data1 = await res1.json();
        if (data1.error) {
          Toast.show({ description: data1.error.message });
          console.log(data1.error);
          return;
        }
      }

      Toast.show({ description: "Thêm sổ tiết kiệm thành công" });
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Toast.show({ description: "Có lỗi xảy ra!" });
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView  automaticallyAdjustKeyboardInsets={true}>
      <Formik
        initialValues={initFormValue}
        validationSchema={validateScheme}
        onSubmit={(values) => handleThemSotietkiem(values)}
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
          <View
            justifyContent={"center"}
            borderRadius={10}
            p={2}
            m={2}
            bg={"white"}
          >
            <View>
              <FormControl isRequired isInvalid={!!errors.ten}>
                <FormControl.Label>Tên quỹ</FormControl.Label>
                <Input
                  InputRightElement={
                    <View mr={2}>
                      <AntDesign name="home" size={20} color="gray" />
                    </View>
                  }
                  placeholder="Nhập tên sổ tiết kiệm"
                  fontSize={16}
                  h={12}
                  value={values.ten}
                  onChangeText={handleChange("ten")}
                ></Input>
                <FormControl.ErrorMessage>
                  {errors.ten}
                </FormControl.ErrorMessage>
              </FormControl>
            </View>
            <View>
              <FormControl isRequired isInvalid={!!errors.sotien}>
                <FormControl.Label>Số tiền</FormControl.Label>
                <Input
                  InputRightElement={
                    <View mr={2}>
                      <Text color={"gray.500"}>VNĐ</Text>
                    </View>
                  }
                  keyboardType="numeric"
                  placeholder="Nhập số tiền"
                  fontSize={16}
                  h={12}
                  value={values.sotien}
                  onChangeText={handleChange("sotien")}
                ></Input>
                <FormControl.ErrorMessage>
                  {errors.sotien}
                </FormControl.ErrorMessage>
              </FormControl>
            </View>
            
            <HStack justifyContent={"space-between"}>
              <View w={"48%"}>
              <View>
              <FormControl isRequired>
                <FormControl.Label>Thời gian bắt đầu</FormControl.Label>
                <Button
                  justifyContent={"start"}
                  height={12}
                  variant={"outline"}
                  title="Show Date Picker"
                  onPress={showDatePicker}
                >
                  <HStack w={"142"} justifyContent={"space-between"}>
                    <Text fontSize={16}>{date.toLocaleDateString()}</Text>
                    <AntDesign name="calendar" size={20} color="gray" />
                  </HStack>
                </Button>
              </FormControl>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onCancel={hideDatePicker}
                onConfirm={handleConfirm}
                locale="vi_VN"
                confirmTextIOS="Xác nhận"
                cancelTextIOS="Hủy"
              />
            </View>
              </View>
              <View w={"48%"}>
              <FormControl isRequired isInvalid={!!errors.laisuat}>
                  <FormControl.Label>Lãi suất</FormControl.Label>
                  <Input
                    InputRightElement={
                      <View mr={2}>
                        <Feather name="percent" size={18} color="gray" />
                      </View>
                    }
                    keyboardType="numeric"
                    placeholder="Nhập lãi suất"
                    fontSize={16}
                    h={12}
                    value={values.laisuat}
                    onChangeText={handleChange("laisuat")}
                  ></Input>
                  <FormControl.ErrorMessage>
                    {errors.laisuat}
                  </FormControl.ErrorMessage>
                </FormControl>
              </View>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <View w={"48%"}><FormControl isRequired>
                  <FormControl.Label>Chu kì</FormControl.Label>
                  <Select
                    h={12}
                    fontSize={16}
                    selectedValue={chuki}
                    justifyContent={"center"}
                    accessibilityLabel="Chọn chu kì"
                    placeholder="Chọn chu kì"
                    onValueChange={(itemValue) => setChuki(itemValue)}
                    dropdownCloseIcon={
                      <View mr={2}>
                        <Feather name="chevron-down" size={24} color="gray" />
                      </View>
                    }
                    dropdownOpenIcon={
                      <View mr={2}>
                        <Feather name="chevron-up" size={24} color="gray" />
                      </View>
                    }
                  >
                    <Select.Item label="Tuần" value="7" />
                    <Select.Item label="Tháng" value="30" />
                    <Select.Item label="Quý" value="90" />
                    <Select.Item label="Năm" value="365" />
                  </Select>
                </FormControl>
               
              </View>
              <View w={"48%"}>
              <FormControl isRequired isInvalid={!!errors.thoihan}>
                  <FormControl.Label>Thời hạn</FormControl.Label>
                  <Input
                    InputRightElement={
                      <View mr={2}>
                        <AntDesign name="reload1" size={20} color="gray" />
                      </View>
                    }
                    keyboardType="numeric"
                    placeholder="Nhập thời hạn"
                    fontSize={16}
                    h={12}
                    value={values.thoihan}
                    onChangeText={handleChange("thoihan")}
                  ></Input>
                  <FormControl.ErrorMessage>
                    {errors.thoihan}
                  </FormControl.ErrorMessage>
                </FormControl>
              </View>
            </HStack>
            <HStack justifyContent={"center"}>
              <TouchableOpacity
              onPressIn={() => {
                setIsValidateOnChange(true);
                validateForm().then(() => {
                  handleSubmit();
                });
              }}
              >
                <HStack
                  borderWidth={2}
                  borderColor={"blue.200"}
                  mt={10}
                  mb={8}
                  borderRadius={8}
                  h={12}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"blue.200"}
                  w={"160"}
                >
                  <Entypo name="save" size={24} color="purple" />
                  <Text ml={2} fontWeight={"medium"} fontSize={18}>
                    XÁC NHẬN
                  </Text>
                </HStack>
              </TouchableOpacity>
            </HStack>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
