import { View, Text, Button, Select,HStack,VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
export default function TransactionScreen({ navigation }) {
  const [service, setService] = useState("ux");
  return (
    <View   p={2}
    ml={2}
    mr={2}
    mt={2} borderRadius={5}
 bg={"white"}
 h={"full"}>
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
      <HStack mb={2} p={3} borderRadius={10} bg={"#93FCF8"} justifyContent={"space-between"}>
              <HStack>
                <View w={12} h={12} bg={"black"} borderRadius={50}></View>
                <VStack pl={2}>
                  <Text
                    fontSize={14}
                    color={"coolGray.400"}
                    fontWeight={"medium"}
                  >
                    Quỹ vay và cho vay
                  </Text>
                  <Text fontSize={16} fontWeight={"bold"}>
                    Vay mua xe
                  </Text>
                </VStack>
              </HStack>
              <VStack alignItems={"flex-end"}>
                <Text
                  fontSize={14}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Trả lãi
                </Text>
                <Text fontSize={16} fontWeight={"bold"}>
                  2000000
                </Text>
              </VStack>
            </HStack>
            <HStack mb={2} p={3} borderRadius={10} bg={"#93FCF8"} justifyContent={"space-between"}>
              <HStack>
                <View w={12} h={12} bg={"black"} borderRadius={50}></View>
                <VStack pl={2}>
                  <Text
                    fontSize={14}
                    color={"coolGray.400"}
                    fontWeight={"medium"}
                  >
                    Quỹ vay và cho vay
                  </Text>
                  <Text fontSize={16} fontWeight={"bold"}>
                    Vay mua xe
                  </Text>
                </VStack>
              </HStack>
              <VStack alignItems={"flex-end"}>
                <Text
                  fontSize={14}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Trả lãi
                </Text>
                <Text fontSize={16} fontWeight={"bold"}>
                  2000000
                </Text>
              </VStack>
            </HStack>
            <HStack mb={2} p={3} borderRadius={10} bg={"#93FCF8"} justifyContent={"space-between"}>
              <HStack>
                <View w={12} h={12} bg={"black"} borderRadius={50}></View>
                <VStack pl={2}>
                  <Text
                    fontSize={14}
                    color={"coolGray.400"}
                    fontWeight={"medium"}
                  >
                    Quỹ vay và cho vay
                  </Text>
                  <Text fontSize={16} fontWeight={"bold"}>
                    Vay mua xe
                  </Text>
                </VStack>
              </HStack>
              <VStack alignItems={"flex-end"}>
                <Text
                  fontSize={14}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Trả lãi
                </Text>
                <Text fontSize={16} fontWeight={"bold"}>
                  2000000
                </Text>
              </VStack>
            </HStack>
            <HStack mb={2} p={3} borderRadius={10} bg={"#93FCF8"} justifyContent={"space-between"}>
              <HStack>
                <View w={12} h={12} bg={"black"} borderRadius={50}></View>
                <VStack pl={2}>
                  <Text
                    fontSize={14}
                    color={"coolGray.400"}
                    fontWeight={"medium"}
                  >
                    Quỹ vay và cho vay
                  </Text>
                  <Text fontSize={16} fontWeight={"bold"}>
                    Vay mua xe
                  </Text>
                </VStack>
              </HStack>
              <VStack alignItems={"flex-end"}>
                <Text
                  fontSize={14}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Trả lãi
                </Text>
                <Text fontSize={16} fontWeight={"bold"}>
                  2000000
                </Text>
              </VStack>
            </HStack>
    </View>
  );
}
