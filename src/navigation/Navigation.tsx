import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '@features/auth/SplashScreen';
import LoginScreen from '@features/auth/LoginScreen';
import { navigationRef } from '@utils/NavigationUtils';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        options={{
          animation: 'fade',
          w,
        }}
        name="LoginScreen"
        component={LoginScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>;
};

export default Navigation;
