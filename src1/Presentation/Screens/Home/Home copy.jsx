// src/presentation/screens/UserScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../Redux/Actions/UserActions';
import { getItemAsync } from 'expo-secure-store';
import { authAdapter } from '../../../Adapters/AuthAdapter';

const UserScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);
  console.log("info user  HOME ",user);
  const dispatch = useDispatch();

  const [data, setdata] = useState(null);

    useEffect(()=>{
      (async()=>{
        const data =await getItemAsync("user");

        setdata(data);
      })()
    })

  const handleLogout = async () => {
     await authAdapter.logoutAdapter(dispatch);
  };

  return (
    <View>
      <Text>Bienvenido, {user ? user : 'Invitado'}</Text>
      <Text>DATA DE LOCALESTORAGE {data}</Text>
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
};

export default UserScreen;
