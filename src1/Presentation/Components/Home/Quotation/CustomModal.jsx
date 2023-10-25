import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { config } from '../../../../Config';
import { Image as img } from "../../../Assets/Image/path";
const CustomModal = ({ visible, onClose, typeBtn, navigation }) => {

    // console.log("navigation", navigation);

    function navigationScreenOptions(screen) {
        console.log("screen ", screen);
        onClose();//cierra el modal para despues navegar a los screens
        navigation.navigate(screen);
    }



    const ViewOptionQuotation = () => {
        return (
            <View style={styles.viewContainerQuote}>
                <View style={styles.viewBodyQuote}>

                    <Text style={styles.txtHeader}>
                        Elige una opción
                    </Text>

                    <View style={styles.viewBtnOptions}>


                        <TouchableOpacity style={styles.btnOptions} onPress={() => navigationScreenOptions(config.routes.CreateQuotation)}>

                            <Image
                                source={img.addQuote}
                                style={[styles.image]}
                            />
                            <Text style={styles.txtTitleOptions}>CREAR</Text>

                        </TouchableOpacity>


                        <TouchableOpacity style={styles.btnOptions} onPress={() => navigationScreenOptions(config.routes.ListViewQuotation)}>
                            <Image
                                source={img.list}
                                style={[styles.image]}
                            />
                            <Text style={styles.txtTitleOptions}>LISTAR</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={[styles.viewBtnOptions, { justifyContent: "center" }]}>


                        <TouchableOpacity style={styles.btnOptions} onPress={() => navigationScreenOptions(config.routes.ViewSpecies)}>
                            <Image
                                source={img.wood}
                                style={[styles.image, { width: 55 }]}
                            />
                            <Text style={styles.txtTitleOptions}>VER ESPECIES</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={styles.btnClose} onPress={() => onClose()}>
                        <Text style={styles.txtClose}>Cerrar</Text>
                    </TouchableOpacity>


                </View>
            </View>

        );
    }

    const ViewOptionContact = () => {
        return (
            <View style={styles.viewContainerQuote}>
                <View style={styles.viewBodyQuote}>

                    <Text style={styles.txtHeader}>
                        Elige una opción
                    </Text>

                    <View style={styles.viewBtnOptions}>

                        <TouchableOpacity style={styles.btnOptions} onPress={()=>navigationScreenOptions(config.routes.CreateContact)}>
                            <Image
                                source={img.addUser}
                                style={[styles.image]}
                            />
                            <Text style={styles.txtTitleOptions}>CREAR</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.btnOptions} onPress={()=>navigationScreenOptions(config.routes.ListViewContacts)}>
                            <Image
                                source={img.list}
                                style={[styles.image]}
                            />
                            <Text style={styles.txtTitleOptions}>LISTAR</Text>
                        </TouchableOpacity>


                    </View>



                    <TouchableOpacity style={styles.btnClose} onPress={onClose}>
                        <Text style={styles.txtClose}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>


        );
    }

    let componentToRender;

    switch (typeBtn) {
        case config.COTIZACION:
            componentToRender = <ViewOptionQuotation />;
            break;
        case config.CONTACTOS:
            componentToRender = <ViewOptionContact />;
            break;
        default:
            componentToRender = <Text></Text>;
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}

        >
            {componentToRender}


        </Modal>
    );
};

export default CustomModal;
const styles = StyleSheet.create({
    viewContainerQuote: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    viewBodyQuote: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: "80%"
    },
    txtHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    btnOptions: {
        flex: 1,
        margin: 5,
        padding: 10,
        backgroundColor: config.COLOR_RED,
        borderRadius: 20
    },
    viewBtnOptions: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        textAlign: "center",
        alignSelf: "center",
    },
    txtTitleOptions: {
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center",
        color: config.COLOR_WHITE
    },
    btnClose: {
        marginTop: 18, alignSelf: "center",
    },
    txtClose: {
        color: config.COLOR_RED,
        fontSize: 20
    },
    image: {
        top: 1.5,
        left: 2,
        width: 30,
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center"
    }
})
