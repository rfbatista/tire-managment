import { Divider, HStack, Pressable, VStack } from 'native-base';
import * as React from 'react';

export interface IModalList {
  list: any[];
  selectItem: (item: any) => void;
	Component: React.FC<any>;
}

export const ModalList: React.FC<IModalList> = ({
  list,
  selectItem,
	Component
}) => {
  return (
    <VStack space={2}>
      {list.map((item, index) => (
        <VStack key={index}>
          <Pressable onPress={() => selectItem(item)}>
            <Component item={item} />
          </Pressable>
          <Divider />
        </VStack>
      ))}
    </VStack>
  );
};
