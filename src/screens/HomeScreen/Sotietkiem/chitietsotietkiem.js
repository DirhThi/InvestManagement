import {
    View,
    Text,
    Button,
    Select,
    HStack,
    VStack,
    Divider,
    ScrollView,
  } from "native-base";
  import { TouchableOpacity } from "react-native";
  import { useState } from "react";
  import { FontAwesome5 } from "@expo/vector-icons";
  export default function ChiTietSoTietKiem({ navigation }) {
    return (
      <ScrollView>
  
    
      <View p={2} ml={2} mr={2} mt={2} borderRadius={5} bg={"white"} h={"full"}>
        <Text ml={4} fontSize={16} fontWeight={"bold"}>
          Chi tiết
        </Text>
        <View mb={2} p={3} pb={2} borderRadius={10} bg={"blue.100"}>
          <VStack>
            <HStack justifyContent={"space-between"}>
              <VStack pl={2}>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Quỹ vay
                </Text>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Số tiền vay
                </Text>
  
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Bắt đầu
                </Text>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Lãi suất
                </Text>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Ưu đãi
                </Text>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Trạng thái
                </Text>
              </VStack>
              <VStack alignItems={"flex-end"} pl={2}>
                <Text fontSize={16} fontWeight={"medium"}>
                  Vay mua xe
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  20.000.000 ₫
                </Text>
  
                <Text fontSize={16} fontWeight={"medium"}>
                  10/7/2023
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  7% / tháng
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  5% / 2 tháng
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  Chưa trả xong
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </View>
        <Text ml={4} fontSize={16} fontWeight={"bold"}>
          Thống kê
        </Text>
        <View mb={2} p={3} pb={2} borderRadius={10} bg={"blue.100"}>
          <VStack>
            <HStack justifyContent={"space-between"}>
              <VStack pl={2}>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Đã trả
                </Text>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Còn lại
                </Text>
  
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Tiền lãi
                </Text>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Tiền gốc và lãi
                </Text>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                Thời gian đã vay
                </Text>
              </VStack>
              <VStack alignItems={"flex-end"} pl={2}>
                <Text fontSize={16} fontWeight={"medium"}>
                0 ₫
  
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  20.000.000 ₫
                </Text>
  
                <Text fontSize={16} fontWeight={"medium"}>
                1.400.000 ₫
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  21.400.000 ₫
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  2 tháng 5 ngày
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </View>
        <Text ml={4} fontSize={16} fontWeight={"bold"}>
          Lịch sử giao dịch
        </Text>
        <View mb={2} p={3} pb={2} borderRadius={10} bg={"blue.100"}>
          <VStack>
            <HStack justifyContent={"space-between"}>
              <VStack pl={2}>
              <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Loại giao dịch
                </Text>
              <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Lãi suất
                </Text>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Số tiền
                </Text>
  
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Thời gian
                </Text>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Tổng lãi
                </Text>
              </VStack>
              <VStack alignItems={"flex-end"} pl={2}>
              <Text fontSize={16} fontWeight={"medium"}>
                  Trả lãi
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  7%
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  1.000.000 ₫
                </Text>
  
                <Text fontSize={16} fontWeight={"medium"}>
                22:30:47  23/10/2023 
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  1.000.000 ₫
                </Text>
                
              </VStack>
            </HStack>
          </VStack>
        </View>
        <View mb={2} p={3} pb={2} borderRadius={10} bg={"blue.100"}>
          <VStack>
            <HStack justifyContent={"space-between"}>
              <VStack pl={2}>
              <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Loại giao dịch
                </Text>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Số tiền
                </Text>
                
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Thời gian
                </Text>
                <Text
                  mr={1}
                  fontSize={16}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Còn lại
                </Text>
              </VStack>
              <VStack alignItems={"flex-end"} pl={2}>
              <Text fontSize={16} fontWeight={"medium"}>
                  Trả trước
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  1.000.000 ₫
                </Text>
                
                <Text fontSize={16} fontWeight={"medium"}>
                22:30:47  23/10/2023 
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  19.000.000 ₫
                </Text>
                
              </VStack>
            </HStack>
          </VStack>
        </View>
      </View>
      </ScrollView>
    );
  }
  