import * as React from 'react';
import { Icon, Input, useContrastText } from 'native-base';

export interface IModalSearchInput {
  setValue: (text: string) => void;
}

export const ModalSearchInput: React.FC<IModalSearchInput> = ({
  setValue,
}) => {
  const handleChange = (event: any) => {setValue(event);}
  return (
    <Input
      width='100%'
      borderRadius='4'
      py='3'
      px='1'
      fontSize='14'
      _web={{
        _focus: { borderColor: 'muted.300' },
      }}
      onChangeText={handleChange}
      InputLeftElement={<Icon m='2' ml='3' size='6' color='gray.400' />}
    />
  );
};
