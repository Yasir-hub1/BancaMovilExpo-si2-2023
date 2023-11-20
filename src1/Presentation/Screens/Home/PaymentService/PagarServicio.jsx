import { StyleSheet, View, Text, Image, Button, Alert } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "react-native-elements";
import { movimientoAdapter } from "../../../../Adapters/MovimientoAdapter";

const PagarServicio = ({ navigation, route }) => {
	const cuentaUsuario = useSelector(state => state.user);
	let { cuenta, user, cliente } = cuentaUsuario;

	const { servicio } = route.params;
	console.log("cuentaUsuario ", cuenta[0].numeroCuenta);
	const [monto, setMonto] = useState("");

	function convertFecha() {
		// Obtén la fecha actual
		/* var fechaActual = new Date();

		// Configura las opciones para formatear la fecha y hora en español
		var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
		var formatoFechaHora = new Intl.DateTimeFormat('es-ES', opciones);

		// Formatea la fecha actual
		var fechaFormateada = formatoFechaHora.format(fechaActual);

		// Muestra la fecha formateada en la consola
		return fechaFormateada; */
		// Obtén la fecha y hora actual
		var fechaActual = new Date();

		// Obtiene el año, mes y día
		var año = fechaActual.getFullYear();
		var mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2); // Agrega un cero al mes si es necesario
		var dia = ("0" + fechaActual.getDate()).slice(-2); // Agrega un cero al día si es necesario

		// Formatea la cadena en el formato "YYYY-MM-DD"
		var fechaFormateada = año + "-" + mes + "-" + dia;

		// Muestra la fecha formateada en la consola
		return fechaFormateada;
	}

	const invoiceData = {
		invoiceDate: convertFecha(),

		client: {
			name: user.username,
			address: cliente.direccion,
			cuenta: cuenta[0].numeroCuenta,
		},
	};

	const { invoiceDate, client } = invoiceData;

	async function enviandoPago() {
		let numCuenta = cuenta[0].numeroCuenta;
		let data = {
			tipoMovimiento: "Retiro",
			monto: monto,
			descripcion: servicio.servicio + " "+ servicio.proveedor,
			cuentaBancaria_id: cuenta[0].id,
		};
		try {
			if (monto!="") {
				let resp = await movimientoAdapter.registrarMovimiento(numCuenta, data);
				if(resp){
					Alert.alert(resp.message);
					navigation.pop(2);
				}
			} else {
				Alert.alert("Ingrese un monto");
			}
		} catch (error) {
			console.log("FRONT ERR ", error);
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>
					{servicio.servicio} {servicio.proveedor}
				</Text>
			</View>
			<View style={styles.clientInfo}>
				<View style={styles.clientText}>
					<Text style={styles.label}>Cliente:</Text>
					<Text style={styles.value}>{client.name}</Text>
					<Text style={styles.label}>Direccion:</Text>
					<Text style={styles.value}>{client.address}</Text>
					<Text style={styles.label}>Nro Cuenta:</Text>
					<Text style={styles.value}>{client.cuenta}</Text>
				</View>
			</View>
			<View style={styles.body}>
				<Text style={styles.label}>Fecha de Emision:</Text>
				<Text style={styles.value}>{invoiceDate}</Text>

				<Text style={styles.label}>Monto:</Text>
				<Input
					value={monto}
					onChangeText={value => setMonto(value)}
					keyboardType="numeric"
				/>
			</View>
			
			<View style={styles.actions}>
				<Button
					style={styles.button}
					title="Pagar"
					onPress={() => enviandoPago()}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		padding: 20,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		borderBottomWidth: 1,
		border: "#ccc",
		paddingBottom: 10,
	},
	logo: {
		width: 50,
		height: 50,
		marginRight: 10,
	},
	headerText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	body: {
		paddingTop: 20,
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
	},
	value: {
		fontSize: 16,
	},
	itemsContainer: {
		paddingTop: 20,
	},
	itemsHeader: {
		fontSize: 16,
		fontWeight: "bold",
	},
	itemRow: {
		flexDirection: "row",
		paddingVertical: 10,
	},
	itemRowEven: {
		backgroundColor: "#eee",
	},
	itemRowOdd: {
		backgroundColor: "#fff",
	},
	itemDescription: {
		flex: 1,
		fontSize: 16,
	},
	itemQuantity: {
		width: 50,
		fontSize: 16,
		textAlign: "center",
	},
	itemPrice: {
		width: 100,
		fontSize: 16,
		textAlign: "right",
	},
	actions: {
		flexDirection: "row",
		justifyContent: "flex-end",
		paddingTop: 20,
	},
	button: {
		marginLeft: 10,
	},
	clientInfo: {
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 20,
	},
	clientLogo: {
		width: 50,
		height: 50,
		marginRight: 10,
	},
	clientText: {
		flex: 1,
	},
});
export default PagarServicio;
