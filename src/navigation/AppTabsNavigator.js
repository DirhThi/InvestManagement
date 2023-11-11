import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NAVIGATION_KEY from '../constants/NavigationKey';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { MyTabBar } from './MyTabBar';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import { useTheme } from 'native-base';
import UserScreen from '../screens/UserScreen/UserScreen';
import TransactionScreen from '../screens/TransactionScreen/TransactionScreen';
import ReportScreen from '../screens/Report/ReportScreen';
import AddInvestScreen from '../screens/AddInvest/addInvest';

const BottomTab = createBottomTabNavigator();

export default function AppTabsNavigator() {
    const { colors } = useTheme();
    return (
        <BottomTab.Navigator
            initialRouteName={NAVIGATION_KEY.Home}
            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{
                headerShadowVisible: false,
            }}
        >
            <BottomTab.Screen
                name={NAVIGATION_KEY.Home}
                component={HomeScreen}
                options={{
                    title: 'Trang chủ',
                    tabBarIcon: () => <Ionicons name="home-outline" size={24} color={colors.primary[500]} />,
                }}
            />
            <BottomTab.Screen
                name="transactionScreen"
                component={TransactionScreen}
                options={{
                    title: 'Giao dịch ',
                    tabBarIcon: () => <Ionicons name="wallet-outline" size={24} color={colors.primary[500]} />,
                }}
            />
            <BottomTab.Screen
                name="addinvestScreen"
                component={AddInvestScreen}
                options={{
                    tabBarLabel:() => {return null},
                    title: 'Thêm quỹ đầu tư',
                    tabBarIcon: () => <AntDesign  name="pluscircle" size={48} color={colors.primary[500]} />,
                }}
            />
            <BottomTab.Screen
                name="reportscreen"
                component={ReportScreen}
                options={{
                    title: 'Báo cáo',
                    tabBarIcon: () => <AntDesign name="linechart" size={24} color={colors.primary[500]} />,
                }}
            />
            <BottomTab.Screen
                name="user"
                component={UserScreen}
                options={{
                    title: 'Tôi',
                    tabBarIcon: () => <Ionicons name="home-outline" size={24} color={colors.primary[500]} />,
                }}
            />
        </BottomTab.Navigator>
    );
}