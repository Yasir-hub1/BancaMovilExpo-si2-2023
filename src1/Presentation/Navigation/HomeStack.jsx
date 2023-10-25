// HomeStack.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { config } from '../../Config';
import {
  CreateQuotation,
  Home,
  ListViewQuotation,
  ListViewSpecies,
  ListViewContacts,
  CreateContacts,
  ViewProfile,
  ViewInfoWK,
  ViewUser,
  ViewCompany
} from '../Screens/Home/Index';


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

        <Stack.Screen name={config.routes.CreateQuotation} component={CreateQuotation} />
        <Stack.Screen name={config.routes.ListViewQuotation} component={ListViewQuotation} />


      </Stack.Group>


      {/* SCREEN ESPCIES */}
      <Stack.Group screenOptions={{ presentation: 'modal' }} >
        <Stack.Screen name={config.routes.ViewSpecies} component={ListViewSpecies} />

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
