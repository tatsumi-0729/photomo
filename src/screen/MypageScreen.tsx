import * as React from 'react';
import {ScrollView} from 'react-native';
import UserProfile from '../components/UserProfile';

import type {UserProfileParams} from '../Types';

export default function MypageScreen() {
  const props: UserProfileParams = [{userId: 9999}, {isMe: true}];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <UserProfile props={props} />
    </ScrollView>
  );
}
