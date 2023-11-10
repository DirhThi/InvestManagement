import { Text, VStack, View,ScrollView, HStack} from "native-base";
import { LineChart } from "react-native-gifted-charts";
export default function TotalScreen({ navigation }) {
    const lineData = [{value: 0},{value: 10},{value: 8},{value: 58},{value: 56},{value: 78},{value: 74},{value: 98}];
    const lineData2 = [{value: 0},{value: 20},{value: 18},{value: 40},{value: 36},{value: 60},{value: 54},{value: 85}];
  return (
    <View flex={1}>
      <ScrollView>
        <View
          justifyItems={"center"}
          pb={3}
      
          borderRadius={5}
          bg={"white"}
        >
            <View p={2} >
                <Text>
                    Đơn vị : triệu VNĐ
                </Text>
            <LineChart
            width={290}
            areaChart
            curved
            data={lineData}
            data2={lineData2}
            height={250}
            showVerticalLines
            spacing={44}
            initialSpacing={0}
            color1="skyblue"
            color2="orange"
            textColor1="green"
            hideDataPoints
            dataPointsColor1="blue"
            dataPointsColor2="red"
            startFillColor1="skyblue"
            startFillColor2="orange"
            startOpacity={0.8}
            endOpacity={0.3}
            />

        <HStack justifyContent={"space-around"} >
        <VStack alignItems={"center"}>
                <Text
                  fontSize={14}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Đầu tư
                </Text>
                <Text fontSize={16} fontWeight={"bold"}>
                  2000000
                </Text>
              </VStack>
              <VStack alignItems={"center"}>
                <Text
                  fontSize={14}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                 Lợi nhuận
                </Text>
                <Text fontSize={16} fontWeight={"bold"}>
                  2000000
                </Text>
              </VStack>
              <VStack alignItems={"center"}>
                <Text
                  fontSize={14}
                  color={"coolGray.400"}
                  fontWeight={"medium"}
                >
                  Quỹ đầu tư
                </Text>
                <Text fontSize={16} fontWeight={"bold"}>
                  2000000
                </Text>
              </VStack>
        </HStack>
       
        </View>
        </View>
      </ScrollView>
    </View>
  );
}
