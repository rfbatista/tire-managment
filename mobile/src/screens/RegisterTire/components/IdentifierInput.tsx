import { FormControl, Input } from 'native-base';
import React from 'react';
import { Tire } from '../../../domain/Tire';

export const IdentifierInput = () => {
  const [identifier, setIdentifier] = React.useState(
    Tire.generateIdentification()
  );
  return (
    <FormControl>
      <FormControl.Label>Identificador</FormControl.Label>
      <Input defaultValue={identifier} />
    </FormControl>
  );
};
