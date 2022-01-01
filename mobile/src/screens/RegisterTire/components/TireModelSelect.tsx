import * as React from 'react';
import {
  Text,
  Button,
  VStack,
  FormControl,
  Pressable,
  IconButton,
  Spinner,
} from 'native-base';
import styled from 'styled-components/native';
import { useSearchTireModelQuery } from '../../../services/tireModel';
import { ModelItem } from './ModelItem';
import { ITireModel } from '../../../domain/TireModel';

const ModelButton = styled(Button)`
  align-items: center;
  background-color: #dddddd;
`;

export const TireModelSelect = () => {
  const [modal, setModal] = React.useState(false);
  const [tireModel, setTireModel] = React.useState<ITireModel>({
    name: 'A',
    brand: {name: 'A'},
  });
  const { data, isError, isLoading } = useSearchTireModelQuery('o');
  return (
    <FormControl>
      <FormControl.Label>Modelo</FormControl.Label>
      <ModelButton onPress={() => setModal(!modal)}>
        {isLoading ? (
          <Spinner accessibilityLabel='Loading posts' />
        ) : (
          <ModelItem item={tireModel} />
        )}
      </ModelButton>
    </FormControl>
  );
};
