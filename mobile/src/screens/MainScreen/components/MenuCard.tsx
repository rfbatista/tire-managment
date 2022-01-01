import * as React from 'react';
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
} from 'native-base';

export interface IMenuCard {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonTitle: string;
	onClick?: () => void;
}

export const MenuCard: React.FC<IMenuCard> = ({
  title,
  subtitle,
  imageUrl,
  buttonTitle,
	onClick
}) => {
  return (
    <Box
      bg='primary.600'
      py='4'
      px='3'
      rounded='md'
      alignSelf='center'
      width={375}
      maxWidth='100%'
    >
      <HStack space={1} justifyContent='space-between'>
        <Box justifyContent='space-between' flex={2}>
          <VStack space='1' marginBottom={3}>
            <Text color='white' fontSize='lg'>
              {title}
            </Text>
            <Box maxW={270}>
              <Text fontSize='sm' color='white'>
                {subtitle}
              </Text>
            </Box>
          </VStack>
          <Pressable
            rounded='sm'
            bg='primary.400'
            alignSelf='flex-start'
            py='2'
            px='3'
						onTouchEnd={onClick}
          >
            <Text
              textTransform='uppercase'
              fontSize='sm'
              fontWeight='bold'
              color='white'
            >
              {buttonTitle}
            </Text>
          </Pressable>
        </Box>
        <Image
          source={{
            uri: `${imageUrl}`,
          }}
          alt='Aang flying and surrounded by clouds'
          height='100'
          rounded='full'
					flex={1}
          width='100'
        />
      </HStack>
    </Box>
  );
};
