/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { MainScreen } from '../screens/MainScreen/MainScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from './types';
import LinkingConfiguration from './LinkingConfiguration';
import { RegisterTire } from '../screens/RegisterTire';
import { RegisterTruck } from '../screens/RegisterTruck';
import { MoveTire } from '../screens/MoveTire';
import { RegisterMaintenance } from '../screens/RegisterMaintenance';
import { RegisterModel } from '../screens/RegisterModel';
import { AlertScreen } from '../screens/AlertScreen';
import { createStackNavigator } from '@react-navigation/stack';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={MainScreen}
        options={{ headerShown: true, title: 'Consumo de Pneus' }}
      />
      <Stack.Screen
        name='RegisterTire'
        component={RegisterTire}
        options={{ headerShown: true, title: 'Registrar Pneu' }}
      />
      <Stack.Screen
        name='RegisterTruck'
        component={RegisterTruck}
        options={{ headerShown: true, title: 'Registrar Caminhão' }}
      />
      <Stack.Screen
        name='MoveTire'
        component={MoveTire}
        options={{ headerShown: true, title: 'Mover Pneu' }}
      />
      <Stack.Screen
        name='RegisterMaintenance'
        component={RegisterMaintenance}
        options={{ headerShown: true, title: 'Registrar manutenção' }}
      />
      <Stack.Screen
        name='RegisterModel'
        component={RegisterModel}
        options={{ headerShown: true, title: 'Registrar manutenção' }}
      />
      <Stack.Screen
        name='Alert'
        component={AlertScreen}
        options={{
          presentation: 'transparentModal',
					cardOverlayEnabled: true,
					cardStyle: { backgroundColor: 'transparent'},
					gestureEnabled: true,
          headerShown: false,
          gestureDirection: 'vertical',
        }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
