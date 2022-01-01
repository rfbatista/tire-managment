import * as React from 'react';
import {
  Box,
  Button,
  FormControl,
  Input,
  Spinner,
  TextArea,
  VStack,
} from 'native-base';
import { ContainerView } from './style';
import { useForm } from 'react-hook-form';
import { LongTextInput } from '../../components/LongTextInput';
import { TextInput } from '../../components/TextInput';
import { ModalSelect } from '../../components/ModalSelect';
import { BrandItem } from './components/BrandItem';
import { useGetAllTireBrandsQuery } from '../../services/tireBrand';
import { tireModelApi } from '../../services/tireModel';
import { ITireModel } from '../../domain/TireModel';

export const RegisterModel = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      brand: null,
      description: '',
    },
  });
  const [useMutationTrigger, mutationResult] =
    tireModelApi.endpoints.createModel.useMutation();
  const onSubmit = (data: ITireModel) => useMutationTrigger(data);
  return (
    <ContainerView>
      <Box p='2' w='100%'>
        <VStack space={3} mt='5'>
          <TextInput
            name={'name'}
            control={control}
            label='Nome do modelo'
            errorMessage='É preciso informar o nome do modelo.'
            isRequired
          />
          <ModalSelect
            Component={BrandItem}
            useQuery={useGetAllTireBrandsQuery}
            name='brand'
            control={control}
            placeholder='Selecionar marca'
						label='Marca'
						modelLabel='Selecione a marca'
          />
          <LongTextInput
            placeholder='Alguma anotação sobre o pneu'
            description='Descrição'
            name={'description'}
            control={control}
          />
          <Button
            mt='2'
            colorScheme={mutationResult.isLoading ? 'dark' : 'indigo'}
            onPress={handleSubmit(onSubmit)}
            isDisabled={mutationResult.isLoading}
          >
            {mutationResult.isLoading ? (
              <Spinner color='indigo.700' />
            ) : (
              'Cadastrar'
            )}
          </Button>
        </VStack>
      </Box>
    </ContainerView>
  );
};
