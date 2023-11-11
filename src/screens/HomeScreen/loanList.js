import {
  View,
  Text,
  Button,
  Select,
  HStack,
  VStack,
  Divider,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
export default function LoanListScreen({ navigation }) {
  return (
    <View p={2} ml={2} mr={2} mt={2} borderRadius={5} bg={"white"} h={"full"}>
      <View mb={2} p={3} pb={2} borderRadius={10} bg={"blue.100"}>
        <VStack>
            <HStack alignItems={"center"} alignSelf={"flex-end"}>
            <FontAwesome5 name="hand-holding-usd" size={18} color="gray" />
            <Text
                ml={1}
                fontSize={16}
                color={"coolGray.400"}
                fontWeight={"normal"}
              >
                Chưa trả xong
              </Text>
            </HStack>
          <HStack>
            <VStack pl={2}>
              <Text
                mr={1}
                fontSize={16}
                color={"coolGray.400"}
                fontWeight={"medium"}
              >
                Quỹ vay :
              </Text>
              <Text
                mr={1}
                fontSize={16}
                color={"coolGray.400"}
                fontWeight={"medium"}
              >
                Số tiền :
              </Text>
              <Text
                mr={1}
                fontSize={16}
                color={"coolGray.400"}
                fontWeight={"medium"}
              >
                Bắt đầu :
              </Text>
              <Text
                mr={1}
                fontSize={16}
                color={"coolGray.400"}
                fontWeight={"medium"}
              >
                Lãi suất :
              </Text>
              <Text
                mr={1}
                fontSize={16}
                color={"coolGray.400"}
                fontWeight={"medium"}
              >
                Ưu đãi :
              </Text>
            </VStack>
            <VStack pl={2}>
              <Text fontSize={16} fontWeight={"bold"}>
                Vay mua xe
              </Text>
              <Text fontSize={16} fontWeight={"bold"}>
                20.000.000
              </Text>
              <Text fontSize={16} fontWeight={"bold"}>
                10/7/2023
              </Text>
              <Text fontSize={16} fontWeight={"bold"}>
                7% / tháng
              </Text>
              <Text fontSize={16} fontWeight={"bold"}>
                5% / 2 tháng
              </Text>
            </VStack>
          </HStack>

          <Divider
            bg="gray.400"
            thickness="2"
            mt={2}
            mb={2}
            orientation="horizontal"
          />
            <HStack mb={2} justifyContent={"space-between"} alignItems={"center"} p={2} height={12} borderRadius={5} bg={"blue.50"}>
            <HStack >
              <Text
                mr={1}
                fontSize={16}
                color={"coolGray.400"}
                fontWeight={"medium"}
              >
                Trả lãi :
              </Text>
              <Text fontSize={16} fontWeight={"bold"}>
                700.000
              </Text>
            </HStack>
            <Text
                mr={1}
                fontSize={16}
                color={"coolGray.400"}
                fontWeight={"normal"}
                fontStyle={"italic"}
              >
                10/9/2023
                </Text>
          </HStack>
          <HStack
            mb={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={2}
            height={12}
            borderRadius={5}
            bg={"blue.50"}
          >
            <HStack>
              <Text
                mr={1}
                fontSize={16}
                color={"coolGray.400"}
                fontWeight={"medium"}
              >
                Trả trước :
              </Text>
              <Text fontSize={16} fontWeight={"bold"}>
                10.000.000
              </Text>
            </HStack>
            <Text
              mr={1}
              fontSize={16}
              color={"coolGray.400"}
              fontWeight={"normal"}
              fontStyle={"italic"}
            >
              30/9/2023
            </Text>
          </HStack>
          <HStack
            mb={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={2}
            height={12}
            borderRadius={5}
            bg={"blue.50"}
          >
            <HStack>
              <Text
                mr={1}
                fontSize={16}
                color={"coolGray.400"}
                fontWeight={"medium"}
              >
                Trả lãi :
              </Text>
              <Text fontSize={16} fontWeight={"bold"}>
                1.400.000
              </Text>
            </HStack>
            <Text
              mr={1}
              fontSize={16}
              color={"coolGray.400"}
              fontWeight={"normal"}
              fontStyle={"italic"}
            >
              10/9/2023
            </Text>
          </HStack>
          <HStack
            mb={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={2}
            height={12}
            borderRadius={5}
            bg={"blue.50"}
          >
            <HStack>
              <Text
                mr={1}
                fontSize={16}
                color={"coolGray.400"}
                fontWeight={"medium"}
              >
                Trả lãi :
              </Text>
              <Text fontSize={16} fontWeight={"bold"}>
                1.400.000
              </Text>
            </HStack>
            <Text
              mr={1}
              fontSize={16}
              color={"coolGray.400"}
              fontWeight={"normal"}
              fontStyle={"italic"}
            >
              10/8/2023
            </Text>
          </HStack>
        </VStack>
      </View>
    </View>
  );
}
