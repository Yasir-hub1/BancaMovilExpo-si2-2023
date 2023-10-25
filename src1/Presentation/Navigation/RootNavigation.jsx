import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { useDispatch, useSelector } from 'react-redux';
import { getItemAsync } from 'expo-secure-store';
import { localStorage } from '../../Adapters/LocalStorageAdapter';
import { authAdapter } from '../../Adapters/AuthAdapter';

const RootNavigation = () => {

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();


  useEffect(() => {
    (async () => {
      try {
        const resp = await localStorage.loadUserData();
        console.log("root navigation 0 ", resp);
        if (resp && resp.user) {
          await authAdapter.loginAdapter(dispatch, resp);
          console.log("root navigation ", resp.user);
        }
      } catch (error) {
          console.log("err RootNavigation  ",error);
      }

    })()
  }, [])
 
  return (
    <NavigationContainer>
      {/* <InicioStack/> */}
      {user == null | '' ? <AuthStack /> : <HomeStack />}

      {/* <ButtonTab/> */}
    </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})