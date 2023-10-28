import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native';
import filter from 'lodash.filter';
import { config } from '../../../../Config';

const API = "https://randomuser.me/api/?results=30";
const UltMov = ({navigation}) => {

    const [isLoading, setisLoading] = useState(false);
    const [Data, setData] = useState([]);


    useEffect(() => {

        fetchData(API);
    }, [])

    const fetchData = async (url) => {
        try {
            setisLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            // console.log("jsono ", json.results);

            setisLoading(false);
        } catch (error) {
            console.log("error API", error)
            setisLoading(false);
        }
    }
    if (isLoading) {
        return (
            <View style={styles.viewActivity}>
                <ActivityIndicator size={"large"} color={config.COLOR_RED} />
            </View>
        );
    }


    const navigationScreen=(screen)=>{
        navigation.navigate(screen);
    }


    return (
        <SafeAreaView style={{ marginHorizontal: 20, top: 30 }}>

            <View style={styles.header}>
                <Text style={styles.txtHeader}>Ultimos Movimientos</Text>
                <TouchableOpacity onPress={()=>navigationScreen(config.routes.UltMovView)}>
                    <Text style={styles.txtViewMore}>Ver más</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={Data}
                keyExtractor={(item) => item.login.username}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={styles.itemContainer}>
                                <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
                                <View >
                                    <Text style={styles.textName}>{item.name.first} </Text>
                                    <Text style={styles.textEmail} >{item.name.first} </Text>
                                </View>

                            </View>
                        </TouchableOpacity>

                    );
                }}

            />

        </SafeAreaView>
    )
}

export default UltMov

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    txtHeader: {
        fontSize: 17,
        fontWeight: "400"
    },
    txtViewMore: {
        fontSize: 17,
        fontWeight: "800",
        color: config.COLOR_RED,

    },
    viewActivity: {
        flex: 1,
        marginHorizontal: 20,
        top: 60
    },
    seachBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        // borderColor:"#sccc",
        borderWidth: 1,
        borderRadius: 4
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginTop: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textName: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: "600"
    },
    textEmail: {
        fontSize: 14,
        marginLeft: 10,
        color: "grey"
    }
})