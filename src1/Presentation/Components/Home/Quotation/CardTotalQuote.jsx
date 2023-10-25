
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { config } from '../../../../Config';
import { Image as img } from '../../../Assets/Image/path';
const CardTotalQuote = ({ title, value }) => {
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
                    <Image
                        source={img.todoList}
                        style={[styles.image, { tintColor: "black", right: 90, top: 30 }]}
                    />
                </View>
                <TouchableOpacity>
                    <Image
                        source={img.reload}
                        style={[styles.image, { marginLeft: 50, bottom: 30 }]}
                    />
                </TouchableOpacity>

            </View>

            <Text style={styles.value}>{value} Bs</Text>
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
        bottom: 10,
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