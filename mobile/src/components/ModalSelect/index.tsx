import * as React from 'react';
import {
  Text,
  Button,
  VStack,
  FormControl,
  Pressable,
  IconButton,
  Spinner,
  WarningOutlineIcon,
} from 'native-base';
import styled from 'styled-components/native';
import { ModalSearch } from './Modal';
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { QueryDefinition } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { useController } from 'react-hook-form';

const ModelButton = styled(Button)`
  align-items: center;
  background-color: #dddddd;
`;

export type ModalUseQuery = UseQuery<
  QueryDefinition<any, any, never, any[], string>
>;

export interface IModalSelect {
  Component: React.FC<any>;
  useQuery: ModalUseQuery;
  defaultValue?: any;
  control: any;
  name: string;
  placeholder?: string;
  label?: string;
  modelLabel?: string;
  withSearchBar?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
}

export const ModalSelect: React.FC<IModalSelect> = ({
  Component,
  useQuery,
  defaultValue = null,
  control,
  name,
  placeholder = '',
  label = '',
  modelLabel = '',
  withSearchBar = false,
  isRequired = false,
  errorMessage = '',
}) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: defaultValue,
    rules: { required: isRequired },
  });
  const [isOpen, setModal] = React.useState(false);
  return (
    <FormControl isRequired={true} isInvalid={fieldState.invalid}>
      <FormControl.Label>{label}</FormControl.Label>
      <ModelButton onPress={() => setModal(!isOpen)} colorScheme={'dark'}>
        {field.value ? <Component item={field.value} /> : placeholder}
      </ModelButton>
      <ModalSearch
        isOpen={isOpen}
        closeModal={() => setModal(false)}
        setItem={field.onChange}
        Component={Component}
        useQuery={useQuery}
        label={modelLabel}
        withSearchBar={withSearchBar}
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
