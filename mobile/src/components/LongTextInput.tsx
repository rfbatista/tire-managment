import { FormControl, TextArea } from 'native-base';
import React from 'react';
import { useController } from 'react-hook-form';

export interface ILongTextInput {
  description: string;
  placeholder: string;
  control: any;
  name: string;
  isRequired?: boolean;
}

export const LongTextInput: React.FC<ILongTextInput> = ({
  name,
  control,
  description,
  placeholder,
  isRequired = false,
}) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules: { required: isRequired },
  });
  return (
    <FormControl>
      <FormControl.Label>{description}</FormControl.Label>
      <TextArea
        value={field.value}
        onChangeText={field.onChange}
        h={20}
        placeholder={placeholder}
        w={{
          base: '100%',
          md: '25%',
        }}
      />
    </FormControl>
  );
};
