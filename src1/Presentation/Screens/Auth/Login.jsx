import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Alert, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Ionicons } from '@expo/vector-icons';
import { config } from "../../../Config";
import CustomButton from '../../Components/Button/CustomButton';
// import { AuthContext } from '../../context/AuthContext';
import { useDispatch } from "react-redux";
import { authAdapter } from "../../../Adapters/AuthAdapter";
import { localStorage } from "../../../Adapters/LocalStorageAdapter";
import PassInputField from "../../Components/Inputs/PassInputField";
import { useForm } from "react-hook-form";
import TextInputField from "../../Components/Inputs/TextInputField";



const Login = ({ navigation }) => {

  const dispatch = useDispatch();

  //TODO: Inicializacion de Onboarding
 /*  useEffect(() => {
    localStorage.onboarding(navigation);
  }, []);
 */

  /* Errores de formulario */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // proteccion de contraseña
  const [secureEntry, setSecureEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureEntry(!secureEntry);
  };


  //*******------para el Login------*********



  const SingIng = async (data) => {
    console.log("Vista login", data);

    try {

      await authAdapter.loginAdapter(dispatch, data);

    } catch (error) {
      console.log("fron login ", error);
    }
  }







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


          <TextInputField
            label={'Usuario'}
            name="username"
            required={true}
            control={control}
            errors={errors}
            minLength={2}
            maxLength={20}
            styleErrorValidate={styles.errorValidacion}
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

          <PassInputField
            label='Contraseña'
            name="password"
            control={control}
            errors={errors}
            minLength={2}
            maxLength={20}
            secureEntry={secureEntry}
            toggleSecureEntry={toggleSecureEntry}
            styleErrorValidate={styles.errorValidacion}

            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color={"red"}
                style={{ marginRight: 5 }}
              />
            }


          />

          <CustomButton
            label={'Iniciar'}
            color={config.COLOR_RED}
            onPress={handleSubmit(SingIng)}
            padding={15}
          />

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


  },
  errorValidacion: {
    color: "#dd3333",
    fontSize: 15,
    top: -10,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    alignItems: "center",

  },
});