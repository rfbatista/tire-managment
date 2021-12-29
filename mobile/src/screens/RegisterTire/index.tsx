import * as React from 'react';
import { Box, Button, FormControl, Input, TextArea, VStack } from 'native-base';
import { Text, View } from 'react-native';
import { StatusOptions } from './components/StatusOptions';
import { Tire } from '../../domain/Tire';
import { ContainerView } from './style';
import { TireModelSelect } from './components/TireModelSelect';
import { IdentifierInput } from './components/IdentifierInput';
import { DescriptionInput } from './components/DescriptionsInput';
import { BACKEND_ENDPOINT } from '../../constants/Endpoints';

export const RegisterTire = () => {
  return (
    <ContainerView>
      <Box p='2' w='100%'>
        <VStack space={3} mt='5'>
          <IdentifierInput />
          <TireModelSelect />
          <StatusOptions />
          <DescriptionInput />
          <Button mt='2' colorScheme='indigo'>
            Cadastrar
          </Button>
        </VStack>
      </Box>
    </ContainerView>
  );
};
