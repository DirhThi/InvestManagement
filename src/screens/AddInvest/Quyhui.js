import { View, Text, Select, Input, HStack, Button } from "native-base";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
export default function ThemQuyHui({ navigation }) {
  const [loan, setLoan] = useState("Quỹ vay");
  const [chuki, setChuki] = useState("");
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
  return (
    <View justifyContent={"center"} borderRadius={10} p={2} m={2} bg={"white"}>
     
      <View>
        <Text fontWeight={"medium"}>Tên quỹ hụi</Text>
        <Input
          InputRightElement={
            <View mr={2}>
              <AntDesign name="home" size={20} color="gray" />
            </View>
          }
          placeholder="Nhập tên quỹ hụi"
          fontSize={16}
          h={12}
        ></Input>
      </View>
      <View>
        <Text mt={2} fontWeight={"medium"}>
          Số tiền
        </Text>
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
        ></Input>
      </View>
      <View>
        <Text mt={2} fontWeight={"medium"}>
          Thời gian bắt đầu
        </Text>
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
      </View>
      <HStack mt={2} justifyContent={"space-between"}>
        <View w={"48%"}>
          <Text fontWeight={"medium"}>Số chân bắt đầu</Text>
          <Input
            InputRightElement={
              <View mr={2}>
<Ionicons name="ios-people-outline" size={22} color="gray" /> 
             </View>
            }
            keyboardType="numeric"
            placeholder="Nhập số chân"
            fontSize={16}
            h={12}
          ></Input>
        </View>
        <View w={"48%"}>
          <Text fontWeight={"medium"}>Chu kì</Text>
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
            <Select.Item label="Tuần" value="Tuần" />
            <Select.Item label="Tháng" value="Tháng" />
            <Select.Item label="Quý" value="Quý" />
            <Select.Item label="Năm" value="Năm" />
          </Select>
        </View>
      </HStack>
      
      <HStack justifyContent={"center"}>
        <TouchableOpacity>
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
  );
}
