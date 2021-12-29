import { CheckIcon, FormControl, Select } from 'native-base';
import * as React from 'react';
import { TireStatusEnum } from '../../../domain/Tire';

export const StatusOptions = () => {
  let [service, setService] = React.useState(TireStatusEnum.stock);
  return (
    <FormControl>
      <FormControl.Label>Status</FormControl.Label>
      <Select
        selectedValue={service}
        minWidth='200'
        placeholder='Escolha o status'
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size='5' />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue as TireStatusEnum)}
      >
        <Select.Item label='Estoque' value={TireStatusEnum.stock} />
        <Select.Item label='Rodando' value={TireStatusEnum.running} />
        <Select.Item label='Descartado' value={TireStatusEnum.discarded} />
        <Select.Item label='Vendido' value={TireStatusEnum.sold} />
      </Select>
    </FormControl>
  );
};
