/**
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import CameraScreen from './screen/CameraScreen';
import MessageScreen from './screen/MessageScreen';
import MypageScreen from './screen/MypageScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name=" "
          component={CameraScreen}
          options={{
            headerTitle: 'さがす',
            tabBarIcon: ({color}) => <TabBarIcon name="camera" color={color} />,
          }}
        />
        <Tab.Screen
          name="  "
          component={MessageScreen}
          options={{
            headerTitle: 'メッセージ',
            tabBarIcon: ({color}) => (
              <TabBarIcon name="envelope" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="   "
          component={MypageScreen}
          options={{
            headerTitle: 'マイページ',
            tabBarIcon: ({color}) => (
              <TabBarIcon name="user-circle" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{marginBottom: -25}} {...props} />;
}

export default App;
