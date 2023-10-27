import React from 'react';
import { NativeBaseProvider, Box, StatusBar } from 'native-base';
import { Provider } from 'react-redux';
import { store } from './src/store';
import theme from './src/configs/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
            <Provider store={store}>
                <Navigation />
                <StatusBar translucent />
            </Provider>
        </NativeBaseProvider>
    </SafeAreaProvider>
);
}


