import { CheckIcon, FormControl, Select, WarningOutlineIcon } from 'native-base';
import * as React from 'react';
import { useController } from 'react-hook-form';

type OptionType = {
  label: string;
  value: string;
};

export interface ISelectOptions {
  options: OptionType[];
  defaultOption: OptionType;
  label?: string;
  control: any;
  name: string;
  placeHolder?: string;
  isRequired?: boolean;
	errorMessage?: string;
}

export const SelectOptions: React.FC<ISelectOptions> = ({
  options,
  defaultOption,
  label,
  control,
  name,
  placeHolder,
  isRequired = false,
	errorMessage = ''
}) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: defaultOption.value,
    rules: { required: isRequired },
  });
  return (
    <FormControl isRequired={true} isInvalid={fieldState.invalid}>
      <FormControl.Label>{label}</FormControl.Label>
      <Select
				defaultValue={defaultOption.value}
        selectedValue={field.value}
        minWidth='200'
        placeholder={placeHolder}
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size='5' />,
        }}
        mt={1}
        onValueChange={field.onChange}
      >
        {options.map((option, index) => (
          <Select.Item label={option.label} value={option.value} key={index} />
        ))}
      </Select>
			<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
