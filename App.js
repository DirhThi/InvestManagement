import React from 'react';
import { NativeBaseProvider, Box, StatusBar } from 'native-base';
import theme from './src/configs/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
            <Navigation />
            <StatusBar translucent />
        </NativeBaseProvider>
    </SafeAreaProvider>
);
}


