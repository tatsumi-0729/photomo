import * as React from 'react';
import {ScrollView} from 'react-native';
import UserProfile from '../components/UserProfile';

import type {UserProfileParams} from '../Types';

export default function UserDetailScreen({route}: {route: any}) {
  const props: UserProfileParams = [{userId: route.params}, {isMe: false}];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <UserProfile props={props} />
    </ScrollView>
  );
}
