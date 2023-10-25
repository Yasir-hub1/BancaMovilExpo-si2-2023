import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native';
import filter from 'lodash.filter';

const API = "https://randomuser.me/api/?results=30";
const Prueba = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const [Data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [fullData, setfullData] = useState([]);


    const handleSearch = (query) => {
        setSearchQuery(query);
        const fomatedQuery = query.toLowerCase();
        // console.log("formated ", fomatedQuery);
        const filteredData = filter(fullData, (user) => {
            return contains(user, fomatedQuery);
        });
        setData(filteredData)

    }
    const contains = ({ name }, query) => {
        const { first } = name;
        console.log("name ", first)
        if (first.includes(query)) {
            return true;
        }



        return false;

    }
    useEffect(() => {
        setisLoading(true);
        fetchData(API);
    }, [])

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            // console.log("jsono ", json.results);
            setfullData(json.results);
            setisLoading(false);
        } catch (error) {
            console.log("error API", error)
            setisLoading(false);
        }
    }
    if (isLoading) {
        return (
            <View style={{ flex: 1, marginHorizontal: 20 }}>
                <ActivityIndicator size={"large"} color="#5500dc" />
            </View>
        );
    }


    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
            <TextInput
                placeholder='Search'
                clearButtonMode='always'
                style={styles.seachBox}
                autoCorrect={false}
                autoCapitalize='none'
                value={searchQuery}
                onChangeText={(query) => handleSearch(query)}
            />

            <FlatList
                data={Data}
                keyExtractor={(item) => item.login.username}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
                            <View >
                                <Text style={styles.textName}>{item.name.first} </Text>
                                <Text style={styles.textEmail} >{item.name.first} </Text>
                            </View>
                        </View>

                    );
                }}

            />

        </SafeAreaView>
    )
}

export default Prueba

const styles = StyleSheet.create({
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