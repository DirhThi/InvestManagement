import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NAVIGATION_KEY from '../constants/NavigationKey';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { MyTabBar } from './MyTabBar';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'native-base';
import UserScreen from '../screens/UserScreen/UserScreen';
import transactionScreen from '../screens/TransactionScreen/TransactionScreen';

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
                component={transactionScreen}
                options={{
                    title: 'Giao dịch ',
                    tabBarIcon: () => <Ionicons name="wallet-outline" size={24} color={colors.primary[500]} />,
                }}
            />
            <BottomTab.Screen
                name="TestScreen2"
                component={HomeScreen}
                options={{
                    title: 'Test Screen 2',
                    tabBarIcon: () => <Ionicons name="home-outline" size={24} color={colors.primary[500]} />,
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