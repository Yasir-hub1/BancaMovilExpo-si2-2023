// HomeStack.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { config } from '../../Config';
import {
  Home,
  
  ListViewContacts,
  CreateContacts,
  ViewProfile,
  ViewInfoWK,
  ViewUser,
  ViewCompany,
  CobrarQr,
  PagarQr
} from '../Screens/Home/Index';
import UltMovView from '../Screens/Home/UltMovView';


const Stack = createNativeStackNavigator();

function HomeStack() {
  return (

    <Stack.Navigator>
      {/* SCREENS HOME */}
      <Stack.Group
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />


      </Stack.Group>

      {/* SCREENS PROFILE */}
      <Stack.Group
        screenOptions={{ headerShown: false, presentation: 'modal' }}
      >
        <Stack.Screen name={config.routes.viewProfile} component={ViewProfile} />
        <Stack.Screen name={config.routes.viewInfoWorkCorp} component={ViewInfoWK} />
        <Stack.Screen name={config.routes.viewUser} component={ViewUser} />
        <Stack.Screen name={config.routes.viewCompany} component={ViewCompany} />


      </Stack.Group>

      {/* SCREEN BTN COTIZACIONES */}
      <Stack.Group screenOptions={{ presentation: 'modal' }}>

        <Stack.Screen name={config.routes.CobrarQr} component={CobrarQr} />
        <Stack.Screen name={config.routes.PagarQr} component={PagarQr} />
        <Stack.Screen name={config.routes.UltMovView} component={UltMovView} />

      </Stack.Group>


      

      {/* SCREENN CONTACS */}

      <Stack.Group screenOptions={{ presentation: 'modal' }} >
        <Stack.Screen name={config.routes.ListViewContacts} component={ListViewContacts} />

        <Stack.Screen name={config.routes.CreateContact} component={CreateContacts} />

      </Stack.Group>

    </Stack.Navigator>

  );
}

export default HomeStack;
