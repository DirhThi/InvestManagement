import { Text, VStack, View, ScrollView, HStack } from "native-base";
import { LineChart } from "react-native-gifted-charts";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
export default function TotalScreen({ navigation }) {
  const textlabeldata = [
    "7/2023",
    "8/2023",
    "9/2023",
    "10/2023",
    "11/2023",
    "12/2023",
  ];
  const lineData = [
    { value: 18, dataPointText: "18" },
    { value: 40, dataPointText: "40" },
    { value: 36, dataPointText: "36" },
    { value: 60, dataPointText: "60" },
    { value: 54, dataPointText: "54" },
    { value: 60, dataPointText: "60" },
  ];
  const lineData2 = [
    { value: 28, dataPointText: "28" },
    { value: 30, dataPointText: "30" },
    { value: 56, dataPointText: "56" },
    { value: 30, dataPointText: "30" },
    { value: 14, dataPointText: "14" },
    { value: 68, dataPointText: "68" },
  ];
  return (
    <View flex={1}>
      <ScrollView>
        <View pb={1} m={2} borderRadius={5} bg={"white"}>
          <View p={1} pl={1}>
            <Text>Triệu VNĐ</Text>
            <LineChart
              data={lineData}
              data2={lineData2}
              style
              areaChart
              curved
              height={250}
              showVerticalLines
              yAxisTextStyle={{ fontSize: "12" }}
              spacing={52}
              initialSpacing={24}
              color1="skyblue"
              color2="orange"
              textColor1="green"
              startFillColor1="skyblue"
              startFillColor2="orange"
              startOpacity={0.8}
              endOpacity={0.3}
              dataPointsHeight={6}
              dataPointsWidth={6}
              dataPointsColor1="skyblue"
              dataPointsColor2="orange"
              textShiftY={-2}
              textShiftX={-5}
              textFontSize={13}
            />
            <HStack justifyContent={"space-between"} ml={10} mt={-6}>
              <Text fontSize={12} ml={-1}>
                {textlabeldata[0]}
              </Text>
              <Text fontSize={12}>{textlabeldata[1]}</Text>
              <Text fontSize={12}>{textlabeldata[2]}</Text>
              <Text fontSize={12}>{textlabeldata[3]}</Text>
              <Text fontSize={12}>{textlabeldata[4]}</Text>
              <Text fontSize={12}>{textlabeldata[5]}</Text>
              <Text fontSize={12}>{textlabeldata[6]}</Text>
            </HStack>
            <HStack justifyContent={"space-around"}>
              <VStack alignItems={"start"}>
                <HStack alignItems={"center"}>
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      borderRadius: 5,
                      backgroundColor: "orange",
                      marginRight: 5,
                    }}
                  />
                  <Text
                    fontSize={14}
                    color={"coolGray.500"}
                    fontWeight={"medium"}
                  >
                    {" "}
                    Đầu tư
                  </Text>
                </HStack>
                <Text fontSize={16} fontWeight={"bold"}>
                  2000000
                </Text>
              </VStack>
              <VStack alignItems={"start"}>
                <HStack alignItems={"center"}>
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      borderRadius: 5,
                      backgroundColor: "skyblue",
                      marginRight: 5,
                    }}
                  />
                  <Text
                    fontSize={14}
                    color={"coolGray.500"}
                    fontWeight={"medium"}
                  >
                    Doanh thu
                  </Text>
                </HStack>

                <Text fontSize={16} fontWeight={"bold"}>
                  2000000
                </Text>
              </VStack>
            </HStack>
          </View>
        </View>
        <View p={2} ml={2} mr={2} borderRadius={5} bg={"white"}>
          <Text mb={2} fontSize={18} color={"black"} fontWeight={"bold"}>
            Thống kê
          </Text>
          <HStack
            mb={2}
            p={2}
            borderRadius={10}
            bg={"blue.100"}
            justifyContent={"space-between"}
          >
            <HStack alignItems={"center"}>
              <View
                justifyContent={"center"}
                alignItems={"center"}
                w={16}
                h={16}
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
                <Text fontSize={16} fontWeight={"medium"}>
                  Tổng đầu tư
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  Tổng lợi nhuận
                </Text>
              </VStack>
            </HStack>
            <VStack alignItems={"flex-end"}>
              <Text fontSize={14} color={"coolGray.400"} fontWeight={"medium"}>
                Số lượng : {"3"}
              </Text>
              <Text color={"orange.600"} fontSize={16} fontWeight={"medium"}>
                2000000
              </Text>
              <Text fontSize={16} color={"blue.400"} fontWeight={"medium"}>
                2000000
              </Text>
            </VStack>
          </HStack>
          <HStack
            mb={2}
            p={2}
            borderRadius={10}
            bg={"blue.100"}
            justifyContent={"space-between"}
          >
            <HStack alignItems={"center"}>
              <View
                justifyContent={"center"}
                alignItems={"center"}
                w={16}
                h={16}
                bg={"white"}
                borderRadius={50}
              >
                <FontAwesome5 name="piggy-bank" size={26} color="#4895ef" />
              </View>
              <VStack pl={2}>
                <Text
                  fontSize={14}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Sổ tiết kiệm
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  Tổng đầu tư
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  Tổng lợi nhuận
                </Text>
              </VStack>
            </HStack>
            <VStack alignItems={"flex-end"}>
              <Text fontSize={14} color={"coolGray.400"} fontWeight={"medium"}>
                Số lượng : {"3"}
              </Text>
              <Text color={"orange.600"} fontSize={16} fontWeight={"medium"}>
                2000000
              </Text>
              <Text fontSize={16} color={"blue.400"} fontWeight={"medium"}>
                2000000
              </Text>
            </VStack>
          </HStack>
          <HStack
            mb={2}
            p={2}
            borderRadius={10}
            bg={"blue.100"}
            justifyContent={"space-between"}
          >
            <HStack alignItems={"center"}>
              <View
                justifyContent={"center"}
                alignItems={"center"}
                w={16}
                h={16}
                bg={"white"}
                borderRadius={50}
              >
                <Ionicons name="md-people-sharp" size={28} color="#4895ef" />
              </View>
              <VStack pl={2}>
                <Text
                  fontSize={14}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Quỹ hụi
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  Tổng đầu tư
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  Tổng lợi nhuận
                </Text>
              </VStack>
            </HStack>
            <VStack alignItems={"flex-end"}>
              <Text fontSize={14} color={"coolGray.400"} fontWeight={"medium"}>
                Số lượng : {"3"}
              </Text>
              <Text color={"orange.600"} fontSize={16} fontWeight={"medium"}>
                2000000
              </Text>
              <Text fontSize={16} color={"blue.400"} fontWeight={"medium"}>
                2000000
              </Text>
            </VStack>
          </HStack>
          <HStack
            mb={2}
            p={2}
            borderRadius={10}
            bg={"blue.100"}
            justifyContent={"space-between"}
          >
            <HStack alignItems={"center"}>
              <View
                justifyContent={"center"}
                alignItems={"center"}
                w={16}
                h={16}
                bg={"white"}
                borderRadius={50}
              >
                <FontAwesome5
                  name="file-invoice-dollar"
                  size={24}
                  color="#4895ef"
                />
              </View>
              <VStack pl={2}>
                <Text
                  fontSize={14}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Khoản cố định
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  Tổng đầu tư
                </Text>
                <Text fontSize={16} fontWeight={"medium"}>
                  Tổng lợi nhuận
                </Text>
              </VStack>
            </HStack>
            <VStack alignItems={"flex-end"}>
              <Text fontSize={14} color={"coolGray.400"} fontWeight={"medium"}>
                Số lượng : {"3"}
              </Text>
              <Text color={"orange.600"} fontSize={16} fontWeight={"medium"}>
                2000000
              </Text>
              <Text fontSize={16} color={"blue.400"} fontWeight={"medium"}>
                2000000
              </Text>
            </VStack>
          </HStack>
        </View>
      </ScrollView>
    </View>
  );
}
