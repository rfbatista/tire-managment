import { Divider, Text, VStack } from 'native-base';
import * as React from 'react';
import { ITireModel } from '../../../domain/TireModel';

export interface IModelItem {
  item: ITireModel;
}

export const ModelItem: React.FC<IModelItem> = ({ item: tireModel }) => {
  return (
    <VStack space={1}>
      <Text fontSize='lg'>{tireModel?.name}</Text>
      <Text fontSize='sm'>{tireModel?.brand?.name}</Text>
    </VStack>
  );
};
