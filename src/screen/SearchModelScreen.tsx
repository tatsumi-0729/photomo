import * as React from 'react';
import {StyleSheet, Dimensions, ScrollView, View} from 'react-native';
import User from '../components/User';

const WIDTH = Dimensions.get('window').width;

export default function SearchModelScreen({userList}: {userList: any}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.pictureWrap}>
          {userList.map((user: any) => (
            <View style={styles.picture}>
              <User user={user} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffef9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pictureWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
    marginBottom: 4,
    width: WIDTH,
    backgroundColor: '#fffef9',
  },
  picture: {
    width: WIDTH / 2,
    padding: 4,
  },
});
