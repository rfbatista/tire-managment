import { FormControl, TextArea } from 'native-base';
import React from 'react';

export const DescriptionInput = () => {
  return (
    <FormControl>
      <FormControl.Label>Descrição</FormControl.Label>
      <TextArea
        h={20}
        placeholder='Alguma anotação sobre o pneu'
        w={{
          base: '100%',
          md: '25%',
        }}
      />
    </FormControl>
  );
};
