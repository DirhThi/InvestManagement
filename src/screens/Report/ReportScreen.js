import { Text, Center, Button, View } from "native-base";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useState } from "react";
import InvestScreen from "./Invest";
import ProfitScreen from "./Profit";
import TotalScreen from "./totalInvest";


export default function ReportScreen({navigation}) {
    const renderScene = SceneMap({
        totalinvest: TotalScreen ,
        invest: InvestScreen ,
        profit: ProfitScreen ,
      });

      const [index, setIndex] = useState(0);

      const [routes] = useState([
        { key: "totalinvest", title:  "Tất cả" },
        { key: "invest", title: "Đầu tư" },
        { key: "profit", title: "Lợi nhuận" },
    ]);
  return (
       <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          scrollEnabled={true}
          indicatorStyle={{ backgroundColor: "green" }}
          style={{ padding: 0, backgroundColor: "transparent" }}
          tabStyle={{ maxHeight: 50, width: 120 }} // here
          renderLabel={({ route, focused, color }) => (
            <View>
              {focused ? (
                <View>
                  <Text fontWeight={"medium"} fontSize={16} color={"black"}>
                    {route.title}
                  </Text>
                  <View height={3} width={300} color={"green.700"}></View>
                </View>
              ) : (
                <Text fontSize={16} color={"grey"}>
                  {route.title}
                </Text>
              )}
            </View>
          )}
        ></TabBar>
      )}
    />
  );
}
