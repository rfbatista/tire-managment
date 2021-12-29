import * as React from 'react';
import {
  Text,
  Button,
  VStack,
  FormControl,
  Pressable,
  IconButton,
} from 'native-base';
import { TireModelModal } from './TireModelModal';
import styled from 'styled-components/native';
import { useSearchTireModelQuery } from '../../../services/tireModel';
import { ModelItem } from './ModelItem';

const ModelButton = styled(Button)`
  align-items: center;
  background-color: #dddddd;
`;

export const TireModelSelect = () => {
  const [modal, setModal] = React.useState(false);
  const { data, isError, isLoading } = useSearchTireModelQuery('o');
  return (
    <FormControl>
      <FormControl.Label>Modelo</FormControl.Label>
      <ModelButton onPress={() => setModal(!modal)}>
        <ModelItem />
      </ModelButton>
      <TireModelModal isOpen={modal} closeModal={() => setModal(false)} />
    </FormControl>
  );
};
