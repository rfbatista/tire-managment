import { ContainerView } from './style';
import { Box, VStack, FormControl, Input, Button, Text } from 'native-base';
import * as React from 'react';

export const MoveTire = () => {
  return (
    <ContainerView>
      <Box safeArea p='2' w='90%' maxW='290' py='8'>
        <FormControl>
          <FormControl.Label>Identificador</FormControl.Label>
        </FormControl>
        <FormControl>
          <FormControl.Label>Modelo</FormControl.Label>
        </FormControl>
        <FormControl>
          <FormControl.Label>Status</FormControl.Label>
        </FormControl>
        <Button mt='2' colorScheme='indigo'>
          Cadastrar
        </Button>
      </Box>
    </ContainerView>
  );
};
