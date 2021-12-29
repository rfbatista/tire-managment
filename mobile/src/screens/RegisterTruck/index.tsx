import { ContainerView } from './style';
import { Box, VStack, FormControl, Input, Button } from 'native-base';
import * as React from 'react';

export const RegisterTruck = () => {
  return (
    <ContainerView>
      <Box safeArea p='2' w='90%' maxW='290' py='8'>
        <VStack space={3} mt='5'>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type='password' />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type='password' />
          </FormControl>
          <Button mt='2' colorScheme='indigo'>
            Sign up
          </Button>
        </VStack>
      </Box>
    </ContainerView>
  );
};
