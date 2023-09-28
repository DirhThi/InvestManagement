import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NAVIGATION_KEY from '../constants/NavigationKey';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name={NAVIGATION_KEY.Login}
                component={LoginScreen}
            />
            {/* <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name={NAVIGATION_KEY.Signup}
                component={SignupScreen}
            /> */}
        </Stack.Navigator>
    );
}
