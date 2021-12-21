import * as React from 'react';
import {Text} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

import UserDetailScreen from '../screen/UserDetailScreen';

export default function MypageScreen({user}: {user: any}) {
  const picturePathList = null;

  return (
    <Card>
      <Card.Cover source={user.path} />
      <Card.Content>
        <Paragraph>
          {user.name} : {user.prefecture}
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Text>test</Text>
      </Card.Actions>
    </Card>
  );
}
