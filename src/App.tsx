/**
 * @format
 */
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import CameraScreen from './screen/CameraScreen';
import MessageScreen from './screen/MessageScreen';
import MypageScreen from './screen/MypageScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="camera" component={CameraScreen} />
      <Tab.Screen name="message" component={MessageScreen} />
      <Tab.Screen name="mypage" component={MypageScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
};

function TabBarIcon(props: {
  name: string;
  color: string;
}) {
  return <FontAwesome size={35} style={{ marginBottom: -25 }} {...props} />;
}

export default App;
