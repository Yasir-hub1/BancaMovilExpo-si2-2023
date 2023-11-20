import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import {
  CardTotalQuote,
  UlMov,
  CustomBtn
} from "../../Components/Home/Bank/index";
import { config } from '../../../Config';
import { Image as img } from '../../Assets/Image/path';
import { cuentaAdapter } from '../../../Adapters/CuentaAdapter';

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>

        <Text style={styles.headerText}>Hola,<Text style={{ fontWeight: "600" }}> {user.username}!</Text>  </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate(config.routes.viewProfile)}
          style={styles.btnProfile}
        >
          <Image source={img.iconProfile} style={styles.iconProfile} />
        </TouchableOpacity>

      </View>

      {/* CARD DE TOTAL DE EXTRACTO */}
      <CardTotalQuote title="Caja de Ahorro"  />

      {/* BTNS PARA QRS  */}
      <CustomBtn navigation={navigation} />

      {/* LISTA DE Extractos RECIENTES */}

      <UlMov navigation={navigation} />


    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: 10,
  },
  header: {
    top:30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30
  },
  headerText: {
    fontSize: 22,
    left: 18,
    fontWeight: "400",
    top: 8
  },
  btnProfile: {
    right: 10
  },
  iconProfile: {
    width: 40,
    height: 40,

  },
})
