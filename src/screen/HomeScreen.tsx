import * as React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

import SearchModelScreen from './SearchModelScreen';
import SearchCameraScreen from './SearchCameraScreen';

export default function HomeScreen(navigation: any) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'model', title: 'モデル'},
    {key: 'cameraman', title: 'カメラマン'},
  ]);

  const userList = [
    {
      id: 1,
      path: require('../../assets/images/59c5dcaf023e4abc6ea8281e9ecec715.png'),
      name: 'david',
      prefecture: '東京都',
    },
    {
      id: 2,
      path: require('../../assets/images/images.jpeg'),
      name: 'macaron',
      prefecture: '東京都',
    },
    {
      id: 3,
      path: require('../../assets/images/2018092810504201.jpeg'),
      name: 'ゆうや',
      prefecture: '東京都',
    },
    {
      id: 4,
      path: require('../../assets/images/img-araki.jpeg'),
      name: '新木優子',
      prefecture: '東京都',
    },
    {
      id: 5,
      path: require('../../assets/images/S__56975362-697x1024.jpeg'),
      name: 'ニキ',
      prefecture: '東京都',
    },
    {
      id: 6,
      path: require('../../assets/images/miyazawa4.jpeg'),
      name: 'もやし',
      prefecture: '東京都',
    },
    {
      id: 7,
      path: require('../../assets/images/unnamed.jpeg'),
      name: 'ジヨン',
      prefecture: '東京都',
    },
  ];

  const renderScene = SceneMap({
    model: () => <SearchModelScreen userList={userList} />,
    cameraman: () => <SearchCameraScreen />,
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
