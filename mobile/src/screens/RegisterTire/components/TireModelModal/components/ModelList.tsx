import { HStack, VStack } from 'native-base';
import * as React from 'react';
import { ModelItem } from '../../ModelItem';

const mock = [1, 2,3,4,5,7,8,9,10,11];

export const ModelList = () => {
  return (
    <VStack space={2}>
      {mock.map((item, index) => (
        <ModelItem key={index} />
      ))}
    </VStack>
  );
};


