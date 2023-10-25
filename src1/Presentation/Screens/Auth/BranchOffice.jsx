import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';

import { config } from '../../../../src1/Config';

import { CheckBox } from 'react-native-elements';
// import ModalPointSale from '../../Components/';

const BranchOffice = () => {
  const [checkRuta, setCheckRuta] = useState(null); // checkBox
  const [showModal,setShowModal] =useState(false);// abrir modal
  const [dataPointSale,setDataPointSale]= useState([]);// datos de los puntos de venta
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, nombre: 'Sucursal 1', checked: false },
    { id: 2, nombre: 'Sucursal 2', checked: false },
    { id: 23, nombre: 'Sucursal 3', checked: false },
    
  ]);

    let PointSale=[
    { id: 1, nombre: 'Point SALE 1', checked: false },
    { id: 2, nombre: 'Point SALE 2', checked: false },
    { id: 23, nombre: 'Point SALE 3', checked: false },
    
   
  ];


  const toggleCheckBox = (item) => {
    if (checkRuta === item.id) {
      // Si el mismo checkbox está seleccionado, deseleccionarlo
      setCheckRuta(null);
    } else {
      // Si se selecciona un nuevo checkbox, deseleccionar el anterior y seleccionar el nuevo
      setCheckRuta(item.id);
      setShowModal(true);
     
      
        setDataPointSale(PointSale)
      
        
    }
  };

  return (
    <>

      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Image source={config.NAME_IMAGE} style={styles.logo} />
        </View>

        <View style={styles.formContainer}>

        <Text style={[styles.titleBranchOffice,{color:config.COLOR_BLACK}]}>Elige una Sucursal</Text>
          {/* Lista de sucursales */}
          <FlatList
            data={checkboxes}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    containerStyle={styles.checkbox}
                    checked={checkRuta === item.id}
                    onPress={() => toggleCheckBox(item)}
                  />
                  <Text style={[styles.checkboxLabel,{color:config.COLOR_BLACK,fontWeight:400}]}>{item.nombre}</Text>
                </View>

              </View>
            )}

          />
            {/* <ModalPointSale
              visible={showModal}
              onClose={()=> setShowModal(!showModal)}
              data={dataPointSale.filter((data) => data.id  === checkRuta)}
            /> */}
      

        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleBranchOffice:
  {
    textAlign:"center",
    fontSize:20,
    fontWeight:700
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 30,
    resizeMode: "contain"
  },
  formContainer: {
    marginHorizontal: 20,
    height:"70%",
    marginTop: 20,
    marginBottom: 440,
    padding: 10,
    
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    marginHorizontal: 15,
    top:15,
    padding: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B0C4DE',
  },
  loginButton: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
  },
});

export default BranchOffice;
