import { View, Text, Select, Input, HStack } from "native-base";
import { useState } from "react";
import {
  Feather,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
export default function LoanScreen({ navigation }) {
  const [loan, setLoan] = useState("Quỹ vay");
  const [chuki, setChuki] = useState("");

  return (
    <View justifyContent={"center"} borderRadius={10} p={2} m={2} bg={"white"}>
      <Select
        h={12}
        mb={2}
        variant="filled"
        fontSize={20}
        fontWeight={"bold"}
        selectedValue={loan}
        justifyContent={"center"}
        accessibilityLabel="Chọn quỹ vay"
        placeholder="Chọn quỹ vay"
        mt={1}
        onValueChange={(itemValue) => setLoan(itemValue)}
      >
        <Select.Item label="Quỹ vay" value="Quỹ vay" />
        <Select.Item label="Quỹ cho vay" value="Quỹ cho vay" />
      </Select>
      <View>
        <Text fontWeight={"medium"}>Tên quỹ</Text>
        <Input
          InputRightElement={
            <View mr={2}>
              <AntDesign name="home" size={20} color="gray" />
            </View>
          }
          placeholder="Nhập tên quỹ"
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
      <HStack mt={2} justifyContent={"space-between"}>
        <View w={"48%"}>
          <Text fontWeight={"medium"}>Lãi suất</Text>
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
          >
            <Select.Item label="Tuần" value="Tuần" />
            <Select.Item label="Tháng" value="Tháng" />
            <Select.Item label="Quý" value="Quý" />
            <Select.Item label="Năm" value="Năm" />
          </Select>
        </View>
      </HStack>
      <HStack mt={2} justifyContent={"space-between"}>
        <View w={"48%"}>
          <Text fontWeight={"medium"}>Ưu đãi</Text>
          <Input
            InputRightElement={
              <View mr={2}>
                <MaterialCommunityIcons
                  name="ticket-percent-outline"
                  size={20}
                  color="gray"
                />
              </View>
            }
            keyboardType="numeric"
            placeholder="Nhập ưu đãi"
            fontSize={16}
            h={12}
          ></Input>
        </View>
        <View w={"48%"}>
          <Text fontWeight={"medium"}>Thời hạn</Text>
          <Input
            InputRightElement={
              <View mr={2}>
                <Text color={"gray.500"}>{chuki}</Text>
              </View>
            }
            keyboardType="numeric"
            placeholder="Nhập thời hạn"
            fontSize={16}
            h={12}
          ></Input>
        </View>
      </HStack>
      <HStack justifyContent={"center"}>
      <TouchableOpacity>
          <HStack borderWidth={2} borderColor={"blue.300"}  mt={10} mb={8} borderRadius={8} h={12} alignItems={"center"} justifyContent={"center"}  bg={"blue.100"} w={'160'}>
            <Entypo name="save" size={24} color="gray" />
            <Text ml={2} fontWeight={"medium"} fontSize={18}>XÁC NHẬN</Text>
          </HStack>
      </TouchableOpacity>
      </HStack>
      
    </View>
  );
}
