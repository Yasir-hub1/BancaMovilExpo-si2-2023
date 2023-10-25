import { StyleSheet, Text, View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Avatar, Icon } from 'react-native-elements'
import { Image as img } from '../../Assets/Image/path'
import { config } from '../../../Config'
import { ListItem } from '@rneui/themed';
import CustomListItem from '../../Components/Home/Profile/CustomListItem'
import CustomButton from '../../Components/Button/CustomButton'
import { authAdapter } from '../../../Adapters/AuthAdapter'
import { useDispatch } from 'react-redux'

const ViewProfile = ({ navigation }) => {
    const dispatch = useDispatch();
    const handleLogout = async () => {
        await authAdapter.logoutAdapter(dispatch);
    };
    return (
        <SafeAreaView style={styles.SafeContainer} >
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}

            >
                <View style={{ paddingHorizontal: 25, top: 5 }}>
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
                                source={img.addPhoto}
                                title="WorkCorp"
                                containerStyle={{ backgroundColor: config.COLOR_WHITE, width: 150, alignSelf: "center" }}
                                onPress={() => console.log("logo")}
                                avatarStyle={{ width: 150, height: 150 }}
                            >
                                <Avatar.Accessory size={30} style={{ backgroundColor: config.COLOR_RED }} />
                            </Avatar>

                        </View>

                        <Text>Edita tu Perfil</Text>

                    </View>



                    <CustomListItem  navigation={navigation} />


                    <View style={{ marginBottom: 15 }} />
                    
                    <CustomButton
                        label={'Cerrar sesion'}
                        color={config.COLOR_RED}
                        onPress={() => handleLogout()}
                        padding={15}
                    />


                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ViewProfile

const styles = StyleSheet.create({
    SafeContainer:{
        flex: 1, 
        justifyContent: 'center',
         backgroundColor: config.COLOR_WHITE
    }
})