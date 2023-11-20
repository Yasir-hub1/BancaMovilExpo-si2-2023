import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    FlatList,
} from 'react-native'
import { servicioAdapter } from '../../../../Adapters/ServiciosAdapter'
import { config } from '../../../../Config'

export default Servicios = ({navigation}) => {
    const [getServices, setGetServices] = useState([])

    useEffect(() => {
        (async () => {
            let getServicios = await servicioAdapter.getServicio();
            setGetServices(getServicios)
            console.log("FRONT ", getServicios);
        })()


    }, [])




    const clickEventListener = item => {
        navigation.navigate(config.routes.PagarServicio,{servicio:item})
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                contentContainerStyle={styles.listContainer}
                data={getServices}
                horizontal={false}
                numColumns={2}
                keyExtractor={item => {
                    return item.id
                }}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity
                                style={[styles.card, { backgroundColor: config.COLOR_WHITE }]}
                                onPress={() => {
                                    clickEventListener(item)
                                }}>
                                <Image style={styles.cardImage} source={{ uri: item.logo }} />
                            </TouchableOpacity>

                            <View style={styles.cardHeader}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={[styles.title, { color: config.COLOR_BLACK }]}>{item.proveedor}</Text>
                                    <Text style={[styles.title, { color: config.COLOR_BLACK }]}>{item.servicio}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#fff',
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: '#fff',
    },
    listContainer: {
        alignItems: 'center',
    },
    /******** card **************/
    card: {
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 10,
        marginHorizontal: 25,
        backgroundColor: '#e2e2e2',
        //flexBasis: '42%',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 15
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 2,
        paddingBottom: 10,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        height: 50,
        width: 50,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        flex: 1,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
})