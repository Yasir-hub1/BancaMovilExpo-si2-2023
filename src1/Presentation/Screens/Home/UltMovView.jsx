import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { movimientoAdapter } from '../../../Adapters/MovimientoAdapter';

const UltMovView = () => {

  const [getMov, setGetMov] = useState([])
  

  const cuentaUsuario = useSelector(state => state.user);
	let { cuenta, user, cliente } = cuentaUsuario;
		// Obtén la fecha actual
		 let fechaActual = new Date();

		// Configura las opciones para formatear la fecha y hora en español
		let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
		let formatoFechaHora = new Intl.DateTimeFormat('es-ES', opciones);

		// Formatea la fecha actual
		let fechaFormateada = formatoFechaHora.format(fechaActual);

		// Muestra la fecha formateada en la consola
		useEffect(() => {
      getMovimiento()
    }, [])
    
		async function getMovimiento(){
      try {
        let nroCuenta=cuenta[0].numeroCuenta;
        let resp=await movimientoAdapter.obtenerMovimientos(nroCuenta);
        console.log("respFRONT ",resp)
        setGetMov(resp);
      } catch (error) {
        console.log("err FRONT getMov",error)
      }
    }
	

  const renderClassItem = ({ item }) => (
    <View style={styles.classItem}>
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>{item.fecha}</Text>
          <Text style={styles.endTime}>{item.endTime}</Text>
        </View>

        <View style={[styles.card,{backgroundColor:"#FAFAD2"}]}>
          <Text style={styles.cardTitle}>{item.descripcion}</Text>
          <Text style={styles.cardDate}>Monto: {item.monto}</Text>
          <Text style={styles.cardDate}>Tipo mov: {item.tipoMovimiento}</Text>

         
          <FlatList
            contentContainerStyle={styles.studentListContainer}
            data={item.students}
            keyExtractor={(student) => student.id}
            renderItem={({ item: student }) => (
              <Image source={{ uri: student.avatar }} style={styles.studentAvatar} />
            )}
            horizontal
          />
        </View>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Historial de movimientos</Text>
        <Text style={styles.headerSubtitle}>{fechaFormateada}</Text>
      </View>

      <View style={styles.body}>
        <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.username}</Text>
          <Text style={styles.userRole}>Nro cuenta: {cuenta[0].numeroCuenta}</Text>
        </View>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ultimos Movimientos</Text>

      <FlatList
      contentContainerStyle={{paddingHorizontal:16}}
        data={getMov}
        ListHeaderComponent={renderHeader}
        renderItem={renderClassItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft:16
  },
  card: {
    flex:1,
    backgroundColor: '#ff7f50',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    marginBottom: 8,
  },
  headerTitle: {
    color:'#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 12,
    color:'#ffffff',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#ffffff',
  },
  userRole: {
    fontSize: 12,
    color:'#ffffff',
  },
  classItem: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  timelineContainer: {
    width: 30,
    alignItems: 'center',
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ff7f50',
    marginBottom: 8,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: '#ff7f50',
  },
  classContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  classHours: {
    marginRight: 8,
    alignItems: 'flex-end',
  },
  startTime: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  endTime: {
    fontSize: 16,
  },
  cardTitle: {
    fontSize: 16,
    color: '#00008B',
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 12,
    color: '#00008B',
    marginBottom: 8,
  },
  studentListContainer:{
    marginRight:10,
  },
  studentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -3,
    borderWidth:1,
    borderColor:'#fff'
  },
});

export default UltMovView;
