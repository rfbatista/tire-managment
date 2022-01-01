import * as React from 'react';
import {
  Modal,
  Spinner,
  CheckIcon,
  Text,
  HStack,
  WarningIcon,
  VStack,
  Box,
} from 'native-base';
import { ModalList } from './components/ModalList';
import { ModalUseQuery } from './index';
import { ModalSearchInput } from './components/ModalSearchInput';
import useDebounceSearch from '../../hooks/useDebounceSearch';
import { ColorSchemeName } from 'react-native';

export interface IModalSearch {
  isOpen: boolean;
  closeModal: () => void;
  setItem: (item: any) => void;
  Component: React.FC;
  useQuery: ModalUseQuery;
  label?: string;
  withSearchBar: boolean;
}

export const ModalSearch: React.FC<IModalSearch> = ({
  isOpen,
  closeModal,
  setItem,
  Component,
  label = '',
  useQuery,
  withSearchBar = false,
}) => {
  const [searchTerm, setSearchTerm] = useDebounceSearch();
  const { data, isError, isLoading, error } = withSearchBar
    ? useQuery(searchTerm)
    : useQuery(null);
  return (
    <Modal isOpen={isOpen} onClose={() => closeModal()}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>{label}</Modal.Header>
        {withSearchBar ? <ModalSearchInput setValue={setSearchTerm} /> : null}
        <Modal.Body>
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            <HStack py='2' flex={1} space={2} alignItems='center'>
              <Box
                _text={{
                  textAlign: 'center',
                }}
              >
                <WarningIcon color='red.800' size={4} />
              </Box>
              <Text textAlign='center' color={'red.800'}>Erro ao carregar</Text>
            </HStack>
          ) : (
            <ModalList
              list={data ? data : []}
              selectItem={setItem}
              Component={Component}
            />
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
