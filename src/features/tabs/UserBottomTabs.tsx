import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeliveryScreen from '@features/delivery/DeliveryScreen';
import ReorderScreen from '@features/reorder/ReorderScreen';
import DiningScreen from '@features/dining/DiningScreen';
import LiveScreen from '@features/live/LivesScreen';

const Tab = createBottomTabNavigator();
const UserBottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Delivery" component={DeliveryScreen}></Tab.Screen>
      <Tab.Screen name="Reorder" component={ReorderScreen}></Tab.Screen>
      <Tab.Screen name="Dining" component={DiningScreen}></Tab.Screen>
      <Tab.Screen name="Live" component={LiveScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default UserBottomTabs;
