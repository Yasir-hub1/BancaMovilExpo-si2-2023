import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Image } from 'react-native-elements';
import { config } from '../../../../Config';
import CustomModal from './CustomModal';
import { Image as img } from '../../../Assets/Image/path';
const CustomBtn = ({navigation}) => {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [stateTypeBtn, setStateTypeBtn] = useState(0)

    const openModal = () => {

        setModalVisible(true);
    };

    const closeModal = () => {

        setModalVisible(false);
    };


    return (
        <View style={styles.buttonContainer}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => { openModal(); setStateTypeBtn(1) }}

            >
                <Image
                    source={img.qrGenerate}
                    style={[styles.image]}
                />
                <Text style={styles.text}>Cobrar QR</Text>

            </TouchableOpacity>


            <View style={{ marginHorizontal: 5 }} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => { openModal(); setStateTypeBtn(2) }}
            >
                <Image
                  source={img.qrScan}
                    style={[styles.image]}
                />
                <Text style={styles.text}>Pagar QR</Text>
            </TouchableOpacity>
            
            <CustomModal visible={modalVisible} onClose={closeModal} typeBtn={stateTypeBtn} navigation={navigation}/>
        </View>
    );
};

export default CustomBtn;

const styles = StyleSheet.create({
    buttonContainer: {
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between', // Puedes ajustar esto según la separación deseada
        paddingHorizontal: 20, // Añade un espacio horizontal entre los botones,
        borderRadius: 10,
        alignSelf: "center"
    },
    button: {
        width: 145, // Ajusta el ancho de los botones según tus necesidades
        height: 50,
        backgroundColor: config.COLOR_RED,
        color: config.COLOR_RED,
        borderWidth: 5,
        borderColor: config.COLOR_RED,
        borderRadius: 20,


    },
    text: {
       
        left: 12,
        bottom: 25,
        textAlign: "center",
        color: "white",
    },
    image: {
        top: 1.5,
        left: 2,
        width: 30,
        height: 30,
        flexDirection: "row"
    }
});
