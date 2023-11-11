import { View, Text, Button, Select, HStack, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
export default function TransactionScreen({ navigation }) {
  const [service, setService] = useState("ux");
  return (
    <View p={2} ml={2} mr={2} mt={2} borderRadius={5} bg={"white"} h={"full"}>
      <Select
        mb={2}
        variant="filled"
        fontSize={20}
        fontWeight={"bold"}
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
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
        <Select.Item label="Tất cả giao dịch" value="ux" />
        <Select.Item label="Tháng 10/2023" value="web" />
        <Select.Item label="Tháng 9/2023" value="cross" />
        <Select.Item label="Tháng 8/2023" value="web" />
        <Select.Item label="Tháng 7/2023" value="cross" />
        <Select.Item label="Tháng 6/2023" value="web" />
        <Select.Item label="Tháng 5/2023" value="cross" />
        <Select.Item label="Tháng 4/2023" value="web" />
        <Select.Item label="Tháng 4/2023" value="cross" />
        <Select.Item label="Tháng 2/2023" value="web" />
        <Select.Item label="Tháng 1/2023" value="cross" />
      </Select>
      <View mb={2} p={3} pb={2} borderRadius={10} bg={"blue.100"}>
        <HStack justifyContent={"space-between"}>
          <HStack>
            <View
              justifyContent={"center"}
              alignItems={"center"}
              w={12}
              h={12}
              bg={"white"}
              borderRadius={50}
            >
              <FontAwesome name="bank" size={24} color="#4895ef" />
            </View>
            <VStack pl={2}>
              <Text fontSize={14} color={"coolGray.400"} fontWeight={"medium"}>
                Quỹ vay và cho vay
              </Text>
              <Text fontSize={16} fontWeight={"bold"}>
                Vay mua xe
              </Text>
            </VStack>
          </HStack>
          <VStack alignItems={"flex-end"}>
            <Text fontSize={14} color={"coolGray.400"} fontWeight={"medium"}>
              Trả lãi : 7%
            </Text>
            <Text fontSize={16} fontWeight={"bold"}>
              2000000
            </Text>
          </VStack>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text fontStyle={"italic"} color={"gray.500"} ml={2} mt={1}>
            7/10/2023{" "}
          </Text>
          <Text fontStyle={"italic"} color={"gray.500"} ml={2} mt={1}>
            {" "}
            14:35:10
          </Text>
        </HStack>
      </View>
      <View mb={2} p={3} pb={2} borderRadius={10} bg={"blue.100"}>
        <HStack justifyContent={"space-between"}>
          <HStack>
            <View
              justifyContent={"center"}
              alignItems={"center"}
              w={12}
              h={12}
              bg={"white"}
              borderRadius={50}
            >
              <FontAwesome name="bank" size={24} color="#4895ef" />
            </View>
            <VStack pl={2}>
              <Text fontSize={14} color={"coolGray.400"} fontWeight={"medium"}>
                Quỹ vay và cho vay
              </Text>
              <Text fontSize={16} fontWeight={"bold"}>
                Vay mua xe
              </Text>
            </VStack>
          </HStack>
          <VStack alignItems={"flex-end"}>
            <Text fontSize={14} color={"coolGray.400"} fontWeight={"medium"}>
              Trả lãi : 7%
            </Text>
            <Text fontSize={16} fontWeight={"bold"}>
              2000000
            </Text>
          </VStack>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text fontStyle={"italic"} color={"gray.500"} ml={2} mt={1}>
            7/10/2023{" "}
          </Text>
          <Text fontStyle={"italic"} color={"gray.500"} ml={2} mt={1}>
            {" "}
            14:35:10
          </Text>
        </HStack>
      </View>
      <View mb={2} p={3} pb={2} borderRadius={10} bg={"blue.100"}>
        <HStack justifyContent={"space-between"}>
          <HStack>
            <View
              justifyContent={"center"}
              alignItems={"center"}
              w={12}
              h={12}
              bg={"white"}
              borderRadius={50}
            >
              <FontAwesome name="bank" size={24} color="#4895ef" />
            </View>
            <VStack pl={2}>
              <Text fontSize={14} color={"coolGray.400"} fontWeight={"medium"}>
                Quỹ vay và cho vay
              </Text>
              <Text fontSize={16} fontWeight={"bold"}>
                Vay mua xe
              </Text>
            </VStack>
          </HStack>
          <VStack alignItems={"flex-end"}>
            <Text fontSize={14} color={"coolGray.400"} fontWeight={"medium"}>
              Trả lãi : 7%
            </Text>
            <Text fontSize={16} fontWeight={"bold"}>
              2000000
            </Text>
          </VStack>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text fontStyle={"italic"} color={"gray.500"} ml={2} mt={1}>
            7/10/2023{" "}
          </Text>
          <Text fontStyle={"italic"} color={"gray.500"} ml={2} mt={1}>
            {" "}
            14:35:10
          </Text>
        </HStack>
      </View>
    </View>
  );
}
