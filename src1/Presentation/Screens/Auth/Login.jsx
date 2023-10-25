import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Alert, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Ionicons } from '@expo/vector-icons';
import { config } from "../../../Config";
import CustomButton from '../../Components/Button/CustomButton';
import InputField from '../../Components/Inputs/InputField';
// import { AuthContext } from '../../context/AuthContext';
import { useDispatch } from "react-redux";
import { authAdapter } from "../../../Adapters/AuthAdapter";



const Login = ({ navigation }) => {

  const dispatch = useDispatch();

  //TODO: Inicializacion de Onboarding
  /*  useEffect(() => {
     iniciarOnboarding()
   }, []);
   
   // funcion para guardar localmente el onboarding
   async function iniciarOnboarding(){
     const iniciarOnboarding =await AsyncStorage.getItem('@onboarding');
     if (iniciarOnboarding) {
       return;
     }else{
       await AsyncStorage.setItem('@onboarding','true');
       navigation.navigate('Onboarding');
     }
   } */

  //FIN

  //*******------para el Login------*********



  const SingIng = async (user, pass) => {
    console.log("Vista login");
    let userData =
    {
      user: user,
      pass: pass,
      userToken: "dasdasfdsgwegeqwtgwer"
    }
    try {

      await authAdapter.loginAdapter(dispatch, userData);

    } catch (error) {
      console.log("fron login ", error);
    }
  }


  const [StateForm, setStateForm] = useState(0);

  const HandleLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
      <>
        <InputField
          label={'Usuario'}
          onChangeText={value => setEmail(value)}
          icon={
            <MaterialIcons
              name="people-outline"
              size={20}
              color={"red"}
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Contraseña'}
          onChangeText={value => setPassword(value)}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color={"red"}
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
        />

        <CustomButton
          label={'Iniciar'}
          color={config.COLOR_RED}
          onPress={() => SingIng(email,
            password)}
          padding={15}
        />



      </>
    );
  };

  const HandleRegister = () => {
    // Aquí puedes mostrar una opción de registro
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
      <>
        <InputField
          label={'Usuario'}
          onChangeText={value => setEmail(value)}
          icon={
            <MaterialIcons
              name="people-outline"
              size={20}
              color={"red"}
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Contraseña'}
          onChangeText={value => setPassword(value)}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color={"red"}
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
        />

        <CustomButton
          label={'Registrar'}
          color={config.COLOR_RED}
          onPress={() => SingIng(email,
            password)}
          padding={15}
        />


      </>

    );

  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: config.COLOR_WHITE }}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}

      >



        <View style={{ paddingHorizontal: 25 }}>
          <View style={{ alignItems: 'center' }}>
            {/* portada */}
            <LottieView
              resizeMode={'contain'}
              style={{ width: 250, height: 250 }}
              source={require('../../Assets/Image/Animation/login.json')}
              autoPlay
            />


          </View>


          <Text
            style={{
              // fontFamily: 'roboto-medium',
              fontSize: 30,
              fontWeight: '500',
              color: config.COLOR_RED,
              marginBottom: 30,
              justifyContent: "center",
              alignSelf: "center"
            }}
          >
            {config.NOMBRE_APP}


          </Text>
          
        




          <HandleLogin />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}
          >
            <Text>Aún no tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(config.routes.Sign_up)}>
              <View style={{ marginLeft: 40 }} />
              <Text style={{ color: '#fe5000', fontWeight: '700' }}>
                {' '}
                Regístrate
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {

    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    textAlign: "center",
    top: -30,
  },
  buttons: {
    flexDirection: "row",
    margin: 10,
    alignSelf: "center"
  },
  button: {
    borderRadius: 8,
    width: 100,
    height: 40,
    justifyContent: "center",
    right: 10


  },
  textBtn: {
    textAlign: "center",
    color: config.COLOR_WHITE,
    fontSize: 17,
    fontWeight: "bold",


  }
});