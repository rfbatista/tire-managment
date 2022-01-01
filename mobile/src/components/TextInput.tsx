import { FormControl, Input, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { useController } from 'react-hook-form';

export interface ITextInput {
  control: any;
  name: string;
  label: string;
  defaultValue?: string;
	isRequired?: boolean;
	errorMessage?: string;
}

export const TextInput: React.FC<ITextInput> = ({
  name,
  control,
  defaultValue = '',
  label,
	isRequired = false,
	errorMessage = ''
}) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: '',
    rules: { required: isRequired },
  });
  return (
    <FormControl isRequired={true} isInvalid={fieldState.invalid}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        value={field.value}
        onChangeText={field.onChange}
        defaultValue={field.value}
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
