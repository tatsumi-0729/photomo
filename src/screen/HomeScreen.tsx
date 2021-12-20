import * as React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

import SearchModelScreen from './SearchModelScreen';
import SearchCameraScreen from './SearchCameraScreen';

export default function HomeScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'モデル'},
    {key: 'second', title: 'カメラマン'},
  ]);

  const renderScene = SceneMap({
    first: SearchModelScreen,
    second: SearchCameraScreen,
  });

  return (
    <TabView
      lazy
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={styles.tab}
          labelStyle={{color: '#fff'}}
          indicatorStyle={{backgroundColor: '#71dfaf'}} //heightを100%にすれば背景色となる
          activeColor={'#000'}
          inactiveColor={'#aaa'}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
});
