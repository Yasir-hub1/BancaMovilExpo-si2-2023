
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { config } from '../../../../Config';
import { Image as img } from '../../../Assets/Image/path';
import { useSelector } from 'react-redux';
import { cuentaAdapter } from '../../../../Adapters/CuentaAdapter';


const CardTotalQuote = ({ title }) => {
    const cuenta = useSelector((state) => state.user.cuenta);
    const [ObtenerCuenta, setObtenerCuenta] = useState([]);

    console.log("info user  cuenta ", cuenta);
    useEffect(() => {
        obtenerCuenta()
    }, [])
    
    async function obtenerCuenta(){
      try {
        let id_cuenta=cuenta[0].id;
        let resp=await cuentaAdapter.obtenerCuentaPorID(id_cuenta);
        console.log("resp ",resp);
        setObtenerCuenta(resp)
      } catch (error) {
        console.log("err" ,error)
      }
    }

    // console.log("numeroCuenta ",ObtenerCuenta)
    return (
        // <TouchableOpacity style={{ marginVertical: 10 }}>
        <LinearGradient
            colors={["#ff4757", config.COLOR_RED]}
            end={{ x: 0.2, y: 0.1 }}
            style={styles.card}
        >

            <View style={styles.rowContainer}>

                <View style={styles.textContainer}>

                    <Text style={styles.title}>{title}</Text>
                    <Text style={{fontSize:12}}>Nro Cuenta: {ObtenerCuenta.numeroCuenta}</Text>
                    <Text style={{fontSize:12}}>Estado : {ObtenerCuenta.estadoCuenta}</Text>
                   
                   
                </View>
                <TouchableOpacity onPress={()=>obtenerCuenta()}>
                    <Image
                        source={img.reload}
                        style={[styles.image, { marginLeft: 50, bottom: 30 }]}
                    />
                </TouchableOpacity>

            </View>

            <Text style={styles.value}>{ObtenerCuenta.saldo} Bs</Text>
        </LinearGradient>

        // </TouchableOpacity>

    )
}

export default CardTotalQuote

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: "center",
        padding: 10,
        marginVertical: 10
    },
    title: {
        left:-15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    value: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'flex-end',
        // bottom: 10,
        right: 20
    },
    image: {
        width: 50,
        height: 50,
        justifyContent: "flex-end",
        alignSelf: "flex-end"
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginHorizontal: 10
    },
    textContainer: {
        marginLeft: 10,
       
        justifyContent: 'space-between',
        alignSelf: "flex-end"
    },
})