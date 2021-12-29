import * as React from 'react';
import { Modal, FormControl, Input, Icon } from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SearchModelInputModel } from './components/SearchModelInput';
import { ModelList } from './components/ModelList';
export interface ITireModelModal {
  isOpen: boolean;
  closeModal: () => void;
}

export const TireModelModal: React.FC<ITireModelModal> = ({
  isOpen,
  closeModal,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={() => closeModal()}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Contact Us</Modal.Header>
        <SearchModelInputModel />
        <Modal.Body>
          <ModelList />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
