import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { config } from "../../../Config";
import CustomButton from '../../Components/Button/CustomButton';
import { Ionicons } from '@expo/vector-icons';
// import { AuthContext } from '../../context/AuthContext';
import { useDispatch } from "react-redux";
import { authAdapter } from "../../../Adapters/AuthAdapter";
import { Avatar } from "react-native-elements";
import TextInputField from "../../Components/Inputs/TextInputField";
import { useForm } from "react-hook-form";
import { Image as img } from "../../Assets/Image/path";
import PassInputField from "../../Components/Inputs/PassInputField";
import { ToastAndroid } from "react-native";


const SignUp = ({ navigation }) => {

    const dispatch = useDispatch();


    // proteccion de contraseña
    const [secureEntry, setSecureEntry] = useState(true);

    const toggleSecureEntry = () => {
        setSecureEntry(!secureEntry);
    };


    /* Errores de formulario */
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const signUp = async (data) => {
        console.log("Vista  registro", data);

        try {

            let resp = await authAdapter.SingUpdapter(data);
            console.log("res Front crear ", resp.usuario)
            if(resp.usuario){
                Alert.alert("cuenta creada");
                navigation.navigate(config.routes.Login);
            }

        } catch (error) {
            console.log("fron login ", error.message);
        }
    }





    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: config.COLOR_WHITE }} >
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}

            >
                <ScrollView style={{ paddingHorizontal: 25, top: 5 }}>




                    <Text
                        style={{
                            // fontFamily: 'roboto-medium',
                            fontSize: 28,
                            fontWeight: '500',
                            color: '#333',
                            marginBottom: 30,
                            color: config.COLOR_RED,
                            marginBottom: 20,
                            justifyContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        Registrate
                    </Text>



                    <TextInputField
                        label={'Usuario'}
                        name="username"
                        required={true}
                        control={control}
                        errors={errors}
                        minLength={2}
                        maxLength={20}
                        keyboardType="default"
                        styleErrorValidate={styles.errorValidacion}
                        icon={
                            <MaterialIcons
                                name="business"
                                size={20}
                                color={"red"}
                                style={{ marginRight: 5 }}
                            />
                        }

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
                        onPress={handleSubmit(signUp)}
                        padding={15}
                    />





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
                                Iniciar sesion
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignUp;

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