import { VStack } from 'native-base';
import * as React from 'react';
import { View, Text } from 'react-native';
import { RootTabScreenProps } from '../../navigation/types';
import { MenuCard } from './components/MenuCard';

export const MainScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  return (
    <View>
      <VStack space={2}>
        <MenuCard
          title='Novo Pneu'
          subtitle='Formulário para registro de pneus.'
          imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWHS0h3W09s4u4UtHO4_jCljZgFQJIJF4AA&usqp=CAU'
          buttonTitle='Cadastrar'
					onClick={() => navigation.navigate('RegisterTire')}
        />
        <MenuCard
          title='Movimentar Pneu'
          subtitle='Remanejar local de uso do pneu.'
          imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpK37oRPIq1K4eSrnnYzDGpPB_v1tJfRql0A&usqp=CAU'
          buttonTitle='Movimentar'
					onClick={() => navigation.navigate('MoveTire')}
        />
        <MenuCard
          title='Registro de Manutenção'
          subtitle='Cadastrar informações sobre as manutenções realizadas.'
          imageUrl='https://booksautomotive.com/wp-content/uploads/2020/02/iStock-1126883104.jpg'
          buttonTitle='Registrar'
					onClick={() => navigation.navigate('RegisterMaintenance')}
        />
        <MenuCard
          title='Cadastrar Caminhão'
          subtitle='Registrar dados sobre o novo caminhão.'
          imageUrl='https://proxy.organicadigital.com/img-6c8d28a859b81b86.png?thumb=710x373%23'
          buttonTitle='Registrar'
					onClick={() => navigation.navigate('RegisterTruck')}
        />
      </VStack>
    </View>
  );
};
