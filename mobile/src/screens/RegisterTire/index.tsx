import * as React from 'react';
import { Box, Button, FormControl, Input, TextArea, VStack } from 'native-base';
import { StatusOptions } from './components/StatusOptions';
import { Tire, ITire, TireStatusEnum } from '../../domain/Tire';
import { ContainerView } from './style';
import { TextInput } from '../../components/TextInput';
import { useForm } from 'react-hook-form';
import { LongTextInput } from '../../components/LongTextInput';
import { SelectOptions } from '../../components/SelectOptions';
import { ModalSelect } from '../../components/ModalSelect';
import { ModelItem } from './components/ModelItem';
import {
  useCreateModelMutation,
  useSearchTireModelQuery,
} from '../../services/tireModel';
import { SendButton } from '../../components/SendButton';
import { useCreateTireMutation } from '../../services/tireApi';
import { AlertScreen } from '../AlertScreen';
import { RootTabScreenProps } from '../../navigation/types';
import { useAlertFeedback } from '../../hooks/useAlertFeedback';
import { useMutationWithAlert } from '../../hooks/useMutationWithAlert';

const options = [
  { label: 'Estoque', value: TireStatusEnum.stock },
  { label: 'Rodando', value: TireStatusEnum.running },
  { label: 'Descartado', value: TireStatusEnum.discarded },
  { label: 'Vendido', value: TireStatusEnum.sold },
];

export const RegisterTire = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      identifier: Tire.generateIdentification(),
      model: {},
      status: options[0].value,
      description: '',
    },
  });
  const [createModel, result] = useMutationWithAlert(
    useCreateTireMutation,
    navigation
  );
  const onSubmit = (data: ITire) => createModel(data);
  return (
    <ContainerView>
      <Box p='2' w='100%'>
        <VStack space={3} mt='5'>
          <TextInput
            name={'identifier'}
            control={control}
            label='Identificador'
            errorMessage='É preciso informar um codigo para identificar o pneu.'
            isRequired
          />
          <ModalSelect
            control={control}
            name='model'
            Component={ModelItem}
            useQuery={useSearchTireModelQuery}
            label='Modelo'
            withSearchBar
						isRequired={true}
						errorMessage='Favor, informar modelo do pneu'
          />
          <SelectOptions
            control={control}
            name='status'
            label='Status'
            placeHolder='Escolha o status'
            options={options}
            defaultOption={options[0]}
            isRequired
            errorMessage='É necessário informar o status de entrada do pneu'
          />
          <LongTextInput
            placeholder='Alguma anotação sobre o pneu'
            description='Descrição'
            name={'description'}
            control={control}
          />
          <SendButton
            onPress={handleSubmit(onSubmit)}
            label='Cadastrar'
            mutationResult={result}
          />
        </VStack>
      </Box>
    </ContainerView>
  );
};
