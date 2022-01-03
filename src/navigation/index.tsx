import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screen/HomeScreen';
import SearchScreen from '../screen/SearchScreen';
import MessageRoomListScreen from '../screen/MessageRoomListScreen';
import MypageScreen from '../screen/MypageScreen';
import UserDetailScreen from '../screen/UserDetailScreen';
import PhotomoListScreen from '../screen/PhotomoListScreen';
import FavoriteListScreen from '../screen/FavoriteListScreen';
import MessageRoomDetailScreen from '../screen/MessageRoomDetailScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false, headerTitle: ' '}}
      />
      <Stack.Screen
        name="UserDetail"
        component={UserDetailScreen}
        options={{headerTitle: ' '}}
      />
      <Stack.Screen
        name="PhotomoList"
        component={PhotomoListScreen}
        options={{headerTitle: ' '}}
      />
      <Stack.Screen
        name="FavoriteList"
        component={FavoriteListScreen}
        options={{headerTitle: ' '}}
      />
      <Stack.Screen
        name="MessageRoomDetail"
        component={MessageRoomDetailScreen}
        options={{headerTitle: ' '}}
      />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="検索" component={SearchScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.VFC = () => (
  <Tab.Navigator initialRouteName=" ">
    <Tab.Screen
      name=" "
      component={HomeScreen}
      options={({navigation}) => ({
        headerTitle: 'ホーム',
        tabBarIcon: ({color}) => <TabBarIcon name="home" color={color} />,
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('検索')}
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
      component={MessageRoomListScreen}
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

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{marginBottom: -25}} {...props} />;
}
