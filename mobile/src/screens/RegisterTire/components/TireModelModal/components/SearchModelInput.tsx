import * as React from 'react';
import { Icon, Input, useContrastText } from 'native-base';
export const SearchModelInputModel = () => {
  return (
    <Input
      placeholder='Search People & Places'
      width='100%'
      borderRadius='4'
      py='3'
      px='1'
      fontSize='14'
      _web={{
        _focus: { borderColor: 'muted.300' },
      }}
      InputLeftElement={<Icon m='2' ml='3' size='6' color='gray.400' />}
    />
  );
};
