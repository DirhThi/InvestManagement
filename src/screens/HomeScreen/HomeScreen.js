import { View, Center, Text, HStack, VStack, ScrollView } from "native-base";
import { PieChart } from "react-native-gifted-charts";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export function HomeScreen({ navigation }) {
  const pieData = [
    {
      value: 47,
      color: "#009FFF",
      gradientCenterColor: "#006DFF",
    },
    {
      value: 40,
      color: "#93FCF8",
      gradientCenterColor: "#3BE9DE",
      focused: false,
    },
  ];

  const renderDot = (color) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const investItem = (nameInvest, total) => {
    return <View></View>;
  };
  return (
    <View flex={1}>
      <ScrollView>
        <View
          justifyItems={"center"}
          ml={2}
          mr={2}
          mt={2}
          pb={1}
          borderRadius={5}
          bg={"white"}
        >
          <HStack
            ml={4}
            m={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text fontSize={18} color={"black"} fontWeight={"bold"}>
              Báo cáo
            </Text>
            <HStack alignItems={"center"}>
              <Text fontSize={16} color={"coolGray.400"} fontWeight={"medium"}>
                Xem tất cả
              </Text>
              <Entypo name="chevron-right" size={20} color="#adb5bd" />
            </HStack>
          </HStack>
          <HStack>
            <VStack ml={0} mt={-2}>
              <View ml={0}>
                <PieChart
                  focusOnPress={true}
                  data={pieData}
                  donut
                  showGradient
                  sectionAutoFocus
                  radius={60}
                  innerRadius={20}
                  innerCircleColor={"#232B5D"}
                  centerLabelComponent={() => {
                    return <View></View>;
                  }}
                />
              </View>
            </VStack>
            <VStack m={4} alignItems={"flex-start"}>
              <HStack alignItems={"center"}>
                {renderDot("#232B5D")}
                <Text color={"coolGray.500"} fontWeight={"semibold"}>
                  Quỹ đầu tư
                </Text>
              </HStack>
              <Text fontSize={18} fontWeight={"bold"}>
                1.300.000
              </Text>
              <HStack>
                <VStack mr={2}>
                  <HStack alignItems={"center"}>
                    {renderDot("#93FCF8")}
                    <Text color={"coolGray.500"} fontWeight={"semibold"}>
                      Đầu tư
                    </Text>
                  </HStack>
                  <Text fontSize={18} fontWeight={"bold"}>
                    1.000.000
                  </Text>
                </VStack>
                <VStack mr={2}>
                  <HStack alignItems={"center"}>
                    {renderDot("#8F80F3")}
                    <Text color={"coolGray.500"} fontWeight={"semibold"}>
                      Lợi nhuận
                    </Text>
                  </HStack>
                  <Text fontSize={18} fontWeight={"bold"}>
                    300.000
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </HStack>
        </View>

        <View
          pt={0}
          ml={2}
          mr={2}
          mt={2}
          borderRadius={5}
          bg={"white"}
          h={"400"}
        >
          <HStack
            ml={4}
            mr={2}
            mt={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text fontSize={18} color={"black"} fontWeight={"bold"}>
              Quỹ đầu tư
            </Text>
            <HStack alignItems={"center"}>
              <Text fontSize={16} color={"coolGray.400"} fontWeight={"medium"}>
                Xem tất cả
              </Text>
              <Entypo name="chevron-right" size={20} color="#adb5bd" />
            </HStack>
          </HStack>
          <View p={4} h={"full"} width={"full"}>
            <HStack mb={4} justifyContent={"space-around"} h={"160"}>
              <TouchableOpacity onPress={() => navigation.navigate("loanlist")}>
                <View
                  p={3}
                  alignItems={"start"}
                  borderRadius={10}
                  height={"full"}
                  width={"150"}
                  bg={"blue.100"}
                >
                  <HStack w={"full"} justifyContent={"space-between"}>
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
                    <View
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={6}
                      h={6}
                      bg={"white"}
                      borderRadius={50}
                    >
                      <Text fontWeight={"bold"}>2</Text>
                    </View>
                  </HStack>
                  <Text fontSize={20} fontWeight={"semibold"}>
                    Quỹ vay và cho vay
                  </Text>
                  <HStack
                    w={"full"}
                    flex={1}
                    alignSelf={"end"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    mt={2}
                  >
                    <Text fontSize={16} fontWeight={"bold"}>
                      1000000
                    </Text>
                    <Entypo name="chevron-right" size={20} color="#adb5bd" />
                  </HStack>
                </View>
              </TouchableOpacity>

              <View
                p={3}
                alignItems={"start"}
                borderRadius={10}
                height={"full"}
                width={"150"}
                bg={"blue.100"}
              >
                <View mb={8}>
                  <HStack w={"full"} justifyContent={"space-between"}>
                    <View
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={12}
                      h={12}
                      bg={"white"}
                      borderRadius={50}
                    >
                      <FontAwesome5
                        name="piggy-bank"
                        size={26}
                        color="#4895ef"
                      />
                    </View>
                    <View
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={6}
                      h={6}
                      bg={"white"}
                      borderRadius={50}
                    >
                      <Text fontWeight={"bold"}>1</Text>
                    </View>
                  </HStack>

                  <Text fontSize={20} fontWeight={"semibold"}>
                    Sổ tiết kiệm
                  </Text>
                </View>

                <HStack
                  w={"full"}
                  flex={1}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={2}
                >
                  <Text fontSize={16} fontWeight={"bold"}>
                    1000000
                  </Text>
                  <Entypo name="chevron-right" size={20} color="#adb5bd" />
                </HStack>
              </View>
            </HStack>
            <HStack justifyContent={"space-around"} h={"160"}>
              <View
                p={3}
                alignItems={"start"}
                borderRadius={10}
                height={"full"}
                width={"150"}
                bg={"blue.100"}
              >
                <View mb={8}>
                  <HStack w={"full"} justifyContent={"space-between"}>
                    <View
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={12}
                      h={12}
                      bg={"white"}
                      borderRadius={50}
                    >
                      <Ionicons
                        name="md-people-sharp"
                        size={28}
                        color="#4895ef"
                      />
                    </View>
                    <View
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={6}
                      h={6}
                      bg={"white"}
                      borderRadius={50}
                    >
                      <Text fontWeight={"bold"}>0</Text>
                    </View>
                  </HStack>

                  <Text fontSize={20} fontWeight={"semibold"}>
                    Quỹ hụi
                  </Text>
                </View>

                <HStack
                  w={"full"}
                  flex={1}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={2}
                >
                  <Text fontSize={16} fontWeight={"bold"}>
                    1000000
                  </Text>
                  <Entypo name="chevron-right" size={20} color="#adb5bd" />
                </HStack>
              </View>
              <View
                p={3}
                alignItems={"start"}
                borderRadius={10}
                height={"full"}
                width={"150"}
                bg={"blue.100"}
              >
                <View>
                  <HStack w={"full"} justifyContent={"space-between"}>
                    <View
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={12}
                      h={12}
                      bg={"white"}
                      borderRadius={50}
                    >
                      <FontAwesome5
                        name="file-invoice-dollar"
                        size={24}
                        color="#4895ef"
                      />
                    </View>
                    <View
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={6}
                      h={6}
                      bg={"white"}
                      borderRadius={50}
                    >
                      <Text fontWeight={"bold"}>3</Text>
                    </View>
                  </HStack>

                  <Text fontSize={20} fontWeight={"semibold"}>
                    Khoản cố định
                  </Text>
                </View>

                <HStack
                  w={"full"}
                  flex={1}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={2}
                >
                  <Text fontSize={16} fontWeight={"bold"}>
                    1000000
                  </Text>
                  <Entypo name="chevron-right" size={20} color="#adb5bd" />
                </HStack>
              </View>
            </HStack>
          </View>
        </View>

        <View
          pt={0}
          ml={2}
          mr={2}
          mt={2}
          borderRadius={5}
          bg={"white"}
          h={"400"}
        >
          <HStack
            ml={4}
            m={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text fontSize={18} color={"black"} fontWeight={"bold"}>
              Hoạt động gần đây
            </Text>
            <HStack alignItems={"center"}>
              <Text fontSize={16} color={"coolGray.400"} fontWeight={"medium"}>
                Xem tất cả
              </Text>
              <Entypo name="chevron-right" size={20} color="#adb5bd" />
            </HStack>
          </HStack>
          <VStack pl={2} pr={2}>
            <HStack
              mb={2}
              p={3}
              borderRadius={10}
              bg={"blue.100"}
              justifyContent={"space-between"}
            >
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
            <HStack
              mb={2}
              p={3}
              borderRadius={10}
              bg={"blue.100"}
              justifyContent={"space-between"}
            >
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
            <HStack
              mb={2}
              p={3}
              borderRadius={10}
              bg={"blue.100"}
              justifyContent={"space-between"}
            >
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
          </VStack>
        </View>
      </ScrollView>
    </View>
  );
}
