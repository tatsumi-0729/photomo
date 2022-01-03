import * as React from 'react';
import {Card, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Types';

type UserDetailScreenProp = StackNavigationProp<
  RootStackParamList,
  'UserDetail'
>;

export default function UserCard({user}: {user: any}) {
  const navigation = useNavigation<UserDetailScreenProp>();
  return (
    <Card onPress={() => navigation.navigate('UserDetail', user.id)}>
      <Card.Cover source={user.path} />
      <Card.Content>
        <Paragraph>
          {user.name} : {user.prefecture}
        </Paragraph>
      </Card.Content>
    </Card>
  );
}
