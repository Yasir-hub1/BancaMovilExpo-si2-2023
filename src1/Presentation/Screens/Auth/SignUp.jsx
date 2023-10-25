import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Alert, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Ionicons } from '@expo/vector-icons';
import { config } from "../../../Config";
import CustomButton from '../../Components/Button/CustomButton';
import InputField from '../../Components/Inputs/InputField';
// import { AuthContext } from '../../context/AuthContext';
import { useDispatch } from "react-redux";
import { authAdapter } from "../../../Adapters/AuthAdapter";
import { Avatar } from "react-native-elements";




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
                    label={'Nombre de la Empresa'}
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
                    label={'Nit'}
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
                <InputField
                    label={'Telefono'}
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

                

                <InputField
                    label={'Usuario'}
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



    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: config.COLOR_WHITE }} >
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}

            >
                <ScrollView style={{ paddingHorizontal: 25,top:5 }}>
                    <View style={{ alignItems: 'center' }}>
                        {/* portada */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginBottom: 20,
                            }}
                        >
                            
                            <Avatar
                                size={150}
                                rounded
                                source={require('../../Assets/Image/Company/add-photo.png')}
                                title="WorkCorp"
                                containerStyle={{ backgroundColor: config.COLOR_WHITE ,width:150,alignSelf:"center"}}
                                onPress={()=> console.log("logo")}
                                avatarStyle={{ width:150 ,height:150}}
                            >
                                <Avatar.Accessory size={30} style={{ backgroundColor:config.COLOR_RED }} />
                            </Avatar>
                               
                        </View>



                    </View>


                    <Text
                        style={{
                            // fontFamily: 'roboto-medium',
                            fontSize: 28,
                            fontWeight: '500',
                            color: '#333',
                            marginBottom: 30,
                            color: config.COLOR_RED,
                            marginBottom: 20,
                            justifyContent: "flex-start",
                            alignSelf: "flex-start"
                        }}
                    >
                        Registra tu Empresa
                    </Text>





                    <HandleLogin />

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: 30,
                        }}
                    >
                        <Text>Ya tienes una cuenta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate(config.routes.Login)}>
                            <View style={{ marginLeft: 40 }} />
                            <Text style={{ color: '#fe5000', fontWeight: '700' }}>
                                {' '}
                                Regístrate
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
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