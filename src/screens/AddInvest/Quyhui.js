import {
  View,
  Text,
  Select,
  Input,
  HStack,
  Button,
  FormControl,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Center,
  Radio,
  Toast,
} from "native-base";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import { useRef } from "react";
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import API from "../../constants/Api";

const validateScheme = Yup.object({
  ten: Yup.string().required("Vui lòng nhập tên quỹ"),
  sotien: Yup.number().required("Vui lòng nhập số tiền"),
  sochanbatdau: Yup.number().required("Vui lòng nhập số chân"),
});

const initFormValue = {
  ten: "",
  sotien: "",
  sochanbatdau: "",
};

export default function ThemQuyHui({ navigation }) {
  const [chuki, setChuki] = useState("30");
  const [nguoinhan, setNguoinhan] = useState("Người khác");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const token = useSelector((state) => state.Reducers.authToken);
  const [isValidateOnChange, setIsValidateOnChange] = useState(false);
  const [lshui, setLshui] = useState([]);
  const user = JSON.parse(token);
  

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
 
 async function handleThemquyhui(values) {
  try {
    setLoading(true);
    var dNow = new Date(date);
    var batdau =
      dNow.getFullYear() + "-" + (dNow.getMonth() + 1) + "-" + dNow.getDate();
    dNow.setDate(dNow.getDate() + chuki * values.sochanbatdau);
    var ketthuc =
      dNow.getFullYear() + "-" + (dNow.getMonth() + 1) + "-" + dNow.getDate();
    const res = await fetch(`${API}/quyhui/add`, {
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
        laytien: "chưa rút hụi",
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
    for (var i = 1; i <= values.sochanbatdau; i++) {
  
      dategd.setDate(dategd.getDate() + Number(chuki) );
      var thoigian =
        dategd.getFullYear() +
        "-" +
        (dategd.getMonth() + 1) +
        "-" +
        dategd.getDate();

      const res1 = await fetch(`${API}/lshui/addlshui`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sochansong: Number(values.sochanbatdau) + 1 - i,
          nguoilay: "Người khác",
          sotiendat: 0,
          thoigian: thoigian,
          quyhui:data._id,
        }),
      });
      const data1 = await res1.json();
      if (data1.error) {
        Toast.show({ description: data1.error.message });
        console.log(data1.error);
        return;
      }
    }

    Toast.show({ description: "Thêm khoản quỹ hụi thành công" });
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
    <KeyboardAvoidingView>
      <Formik
        initialValues={initFormValue}
        validationSchema={validateScheme}
        onSubmit={(values) => handleThemquyhui(values)}
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
                  placeholder="Nhập tên quỹ hụi"
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
                  <HStack w={"80"} justifyContent={"space-between"}>
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

            <HStack justifyContent={"space-between"}>
              <View w={"48%"}>
                <FormControl isRequired isInvalid={!!errors.sochanbatdau}>
                  <FormControl.Label>Số chân bắt đầu</FormControl.Label>
                  <Input
                    InputRightElement={
                      <View mr={2}>
                        <Ionicons
                          name="ios-people-outline"
                          size={22}
                          color="gray"
                        />
                      </View>
                    }
                    keyboardType="numeric"
                    placeholder="Nhập số chân"
                    fontSize={16}
                    h={12}
                    value={values.sochanbatdau}
                    onChangeText={handleChange("sochanbatdau")}
                  ></Input>
                  <FormControl.ErrorMessage>
                    {errors.sochanbatdau}
                  </FormControl.ErrorMessage>
                </FormControl>
              </View>
              <View w={"48%"}>
                <FormControl isRequired>
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
            </HStack>

            <HStack justifyContent={"center"}>
              <TouchableOpacity
                onPress={() => {
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
          {/* <Modal
              isOpen={modalVisible}
              onClose={() => setModalVisible(false)}
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
            >
              <KeyboardAvoidingView
                style={{ width: "100%" }}
                behavior="position"
              >
                <Center>
                  <Modal.Content maxH={480}>
                    <Modal.Header>Thông tin rút hụi</Modal.Header>
                    <Modal.Body>
                      {imageList.map((ob,index) => (true ? (
                      <View key={index}>
                        <Text fontSize={16} fontWeight={"medium"}>Lần 1</Text>
                      <FormControl>
                        <FormControl.Label>Người thắng</FormControl.Label>
                        <Radio.Group
                          name="myRadioGroup"
                          accessibilityLabel="favorite number"
                          value={nguoinhan}
                          onChange={(nextValue) => {
                            setNguoinhan(nextValue);
                          }}
                        >
                          <HStack>
                            <Radio value="Người khác" my={1}>
                              Người khác
                            </Radio>
                            <Radio ml={10} value="Tôi" my={1}>
                              Tôi
                            </Radio>
                          </HStack>
                        </Radio.Group>
                      </FormControl>

                      <FormControl>
                        <FormControl.Label>Số tiền đặt thắng</FormControl.Label>
                        <Input ref={initialRef} />
                      </FormControl>
                      </View>): (<Text> Rỗng</Text>)))}
                      
                      
                    </Modal.Body>
                    <Modal.Footer>
                      <Button.Group space={2}>
                        <Button
                          variant="ghost"
                          colorScheme="blueGray"
                          onPress={() => {
                            setModalVisible(false);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          onPress={() => {
                            setModalVisible(false);
                          }}
                        >
                          Save
                        </Button>
                      </Button.Group>
                    </Modal.Footer>
                  </Modal.Content>
                </Center>
              </KeyboardAvoidingView>
            </Modal> */}
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}
