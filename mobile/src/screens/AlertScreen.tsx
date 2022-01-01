import React from 'react';
import {
  Alert,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
  Box,
  Text,
  Center,
  NativeBaseProvider,
  View,
} from 'native-base';
import { RootStackParamList, RootTabScreenProps } from '../navigation/types';
import styled from 'styled-components';
import { Pressable } from 'react-native';

const AlertContainer = styled(Alert)`
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: 0;
`;

const PressableStlyed = styled(Pressable)`
  background-color: rgba(1, 1, 1, 0.2);
  flex: 1;
`;

export function AlertScreen({
  route,
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const { isSuccess } = route.params;
  const [isVisible, setVisible] = React.useState(false);
  return (
    <PressableStlyed onPress={() => navigation.pop()}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AlertContainer
          w='90%'
          status={isSuccess ? 'success' : 'error'}
          colorScheme={isSuccess ? 'success' : 'error'}
        >
          <VStack space={2} flexShrink={1} w='100%'>
            <HStack flexShrink={1} space={2} justifyContent='space-between'>
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt='1' />
                <Text fontSize='md' color='coolGray.800'>
                  {isSuccess
                    ? 'Informações salvas com sucesso'
                    : 'Error ao salvar as informações'}
                </Text>
              </HStack>
              <IconButton
                variant='unstyled'
                icon={<CloseIcon size='3' color='coolGray.600' />}
              />
            </HStack>
          </VStack>
        </AlertContainer>
      </View>
    </PressableStlyed>
  );
}
