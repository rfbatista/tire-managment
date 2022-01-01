import { Divider, Text, VStack } from 'native-base';
import * as React from 'react';
import { ITireModel } from '../../../domain/TireModel';
import { ITireBrand } from '../../../domain/TireBrand';

export interface IModelItem {
  item: ITireBrand;
}

export const BrandItem: React.FC<IModelItem> = ({ item: tireBrand }) => {
  return (
    <VStack space={1} >
      <Text fontSize='lg'>{tireBrand ? tireBrand.name : 'Selecione a marca'}</Text>
    </VStack>
  );
};
