import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import AppTabsNavigator from "./AppTabsNavigator";
import NAVIGATION_KEY from "../constants/NavigationKey";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";
import { Init } from "../store/actions";
import { useState, useEffect } from "react";
import { View } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoanScreen from "../screens/AddInvest/Loan";
import LoanListScreen from "../screens/HomeScreen/Quyvay/loanList";
import ThemSoTietKiem from "../screens/AddInvest/Sotienkiem";
import ThemQuyHui from "../screens/AddInvest/Quyhui";
import ThemKhoanCoDinh from "../screens/AddInvest/Khoancodinh";
import ChiTietQuyVay from "../screens/HomeScreen/Quyvay/chitietquyvay";
import DanhSachSoTietKiem from "../screens/HomeScreen/Sotietkiem/dssotietkiem";
import ChiTietSoTietKiem from "../screens/HomeScreen/Sotietkiem/chitietsotietkiem";
export default function Navigation() {
  // hooks
  // action
  const prepare = async () => {
    await waitAsyncAction(2000);
    // rehydrate
    // const token = (await storage.get('token')) ?? '';
    // dispatch(reLogin({ token: token }));
    // dispatch(
    //     changeApplicationState({
    //         isAppReady: true,
    //     }),
    // );
  };

  return (
    <NavigationContainer onReady={prepare}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const token = useSelector((state) => state.Reducers.authToken);

  // const getToken = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('token');
  //       if (value !== null) {
  //         setToken(value)
  //       }
  //     } catch (e) {
  //       //error
  //     }
  //   };

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {token === null ? (
        <Stack.Screen
          name={NAVIGATION_KEY.Auth}
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name={NAVIGATION_KEY.AppTabs}
            component={AppTabsNavigator}
            options={{ headerShown: false }}
          />
        </>
      )}
      <Stack.Group>
        <Stack.Screen
          options={{
            title: "Thêm quỹ vay và cho vay",
            headerShown: true,
            gestureEnabled: true,
          }}
          name="loan"
          component={LoanScreen}
        />
        <Stack.Screen
          options={{
            title: "Thêm sổ tiết kiệm",
            headerShown: true,
            gestureEnabled: true,
          }}
          name="addsotietkiem"
          component={ThemSoTietKiem}
        />
        <Stack.Screen
          options={{
            title: "Thêm quỹ hụi",
            headerShown: true,
            gestureEnabled: true,
          }}
          name="addquyhui"
          component={ThemQuyHui}
        />
        <Stack.Screen
          options={{
            title: "Thêm khoản cố định",
            headerShown: true,
            gestureEnabled: true,
          }}
          name="addkhoancodinh"
          component={ThemKhoanCoDinh}
        />
        <Stack.Screen
          options={{
            title: "Quỹ vay và cho vay",
            headerShown: true,
            gestureEnabled: true,
          }}
          name="loanlist"
          component={LoanListScreen}
        />
         <Stack.Screen
          options={{
            headerBackTitleVisible :false,
            title: "Chi tiết quỹ vay",
            headerShown: true,
            gestureEnabled: true,
          }}
          name="chitietquyvay"
          component={ChiTietQuyVay}
        />
        <Stack.Screen
          options={{
            title: "Sổ tiết kiệm",
            headerShown: true,
            gestureEnabled: true,
          }}
          name="dssotietkiem"
          component={DanhSachSoTietKiem}
        />
         <Stack.Screen
          options={{
            headerBackTitleVisible :false,
            title: "Chi tiết sổ tiết kiệm",
            headerShown: true,
            gestureEnabled: true,
          }}
          name="chitietsotietkiem"
          component={ChiTietSoTietKiem}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          name="signup"
          component={RegisterScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
