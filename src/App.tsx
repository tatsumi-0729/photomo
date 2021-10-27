/**
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screen/HomeScreen';
import MessageScreen from './screen/MessageScreen';
import MypageScreen from './screen/MypageScreen';

const Tab = createBottomTabNavigator();

const RootStack: React.VFC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name=" "
      component={HomeScreen}
      options={({navigation}) => ({
        headerTitle: 'ホーム',
        tabBarIcon: ({color}) => <TabBarIcon name="home" color={color} />,
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('Home')}
            style={({pressed}) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <FontAwesome name="search" size={28} style={{marginRight: 25}} />
          </Pressable>
        ),
      })}
    />
    <Tab.Screen
      name="  "
      component={MessageScreen}
      options={{
        headerTitle: 'メッセージ',
        tabBarIcon: ({color}) => <TabBarIcon name="envelope" color={color} />,
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
);

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{marginBottom: -25}} {...props} />;
}
