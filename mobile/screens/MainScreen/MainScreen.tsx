import * as React from 'react';
import { View, Text } from 'react-native';
import { RootTabScreenProps } from '../../types';

export const MainScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  return (
    <View>
      <Text> Main screen</Text>
    </View>
  );
};
