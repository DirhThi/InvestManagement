import {
  View,
  Text,
  Select,
  Input,
  HStack,
  Button,
  FormControl,
  ScrollView,
  Toast,
} from "native-base";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import API from "../../constants/Api";

const validateScheme = Yup.object({
  ten: Yup.string().required("Vui lòng nhập tên quỹ"),
  sotien: Yup.number().required("Vui lòng nhập số tiền"),
  thoihan: Yup.number().required("Vui lòng nhập thời hạn"),
});

const initFormValue = {
  ten: "",
  sotien: "",
  thoihan: "",
};
export default function ThemKhoanCoDinh({ navigation }) {
  const [loan, setLoan] = useState("Quỹ thu");
  const [loaigiaodich, setloaigiaodich] = useState("Khoản thu");
  const [chuki, setChuki] = useState("30");
  const [loading, setLoading] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const token = useSelector((state) => state.Reducers.authToken);
  const [isValidateOnChange, setIsValidateOnChange] = useState(false);
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

  async function handleThemKhoancodinh(values) {
    try {
      setLoading(true);
      var dNow = new Date(date);
      var batdau =
        dNow.getFullYear() + "-" + (dNow.getMonth() + 1) + "-" + dNow.getDate();
      dNow.setDate(dNow.getDate() + chuki * values.thoihan);
      var ketthuc =
        dNow.getFullYear() + "-" + (dNow.getMonth() + 1) + "-" + dNow.getDate();
      const res = await fetch(`${API}/khoancodinh/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          batdau: batdau,
          ketthuc: ketthuc,
          user: user._id,
          loaiquy: loan,
          chuki: chuki,
          trangthai: "Đang hoạt động",
        }),
      });
      const data = await res.json();
      if (data.error) {
        Toast.show({ description: data.error.message });
        console.log(data.error);
        return;
      }
      
      if (loan == "Quỹ chi") {
        setloaigiaodich("khoản chi");
      } 
      var dategd = new Date(batdau);
      var day=chuki;
      for (var i = 1; i <= values.thoihan; i++) {
    
        dategd.setDate(dategd.getDate() + Number(chuki) );
        var thoigian =
          dategd.getFullYear() +
          "-" +
          (dategd.getMonth() + 1) +
          "-" +
          dategd.getDate();

        const res1 = await fetch(`${API}/lsgd/addlskcd`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loaigiaodich: loaigiaodich,
            sotien: values.sotien,
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

      Toast.show({ description: "Thêm khoản cố định thành công" });
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
      <View
        justifyContent={"center"}
        borderRadius={10}
        p={2}
        m={2}
        bg={"white"}
      >
       
        <Formik
          initialValues={initFormValue}
          validationSchema={validateScheme}
          onSubmit={(values) => handleThemKhoancodinh(values)}
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
            <View borderRadius={10} bg="white">
              <Select
                h={12}
                mb={2}
                variant="filled"
                fontSize={20}
                fontWeight={"bold"}
                selectedValue={loan}
                justifyContent={"center"}
                accessibilityLabel="Chọn loại quỹ"
                placeholder="Chọn loại quỹ"
                mt={1}
                onValueChange={(itemValue) => setLoan(itemValue)}
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
                <Select.Item label="Quỹ thu" value="Quỹ thu" />
                <Select.Item label="Quỹ chi" value="Quỹ chi" />
              </Select>
              <View>
                <FormControl isRequired isInvalid={!!errors.ten}>
                  <FormControl.Label>Tên quỹ</FormControl.Label>
                  <Input
                    InputRightElement={
                      <View mr={2}>
                        <AntDesign name="home" size={20} color="gray" />
                      </View>
                    }
                    placeholder="Nhập tên quỹ"
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
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onCancel={hideDatePicker}
                    onConfirm={handleConfirm}
                    locale="vi_VN"
                    confirmTextIOS="Xác nhận"
                    cancelTextIOS="Hủy"
                  />
                </FormControl>
              </View>
              <HStack justifyContent={"space-between"}>
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
                      value={values.chuki}
                      onChangeText={handleChange("chuki")}
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
                      <Select.Item label="Tháng" value="30" />
                      <Select.Item label="Tuần" value="7" />
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
                      value={values.thoihan}
                      onChangeText={handleChange("thoihan")}
                      keyboardType="numeric"
                      placeholder="Nhập thời hạn"
                      fontSize={16}
                      h={12}
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
      </View>
    </ScrollView>
  );
}
