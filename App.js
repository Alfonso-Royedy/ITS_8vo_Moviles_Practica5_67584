import React, { useState } from 'react';
import { StatusBar, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null); // null: no intentado, true: �xito, false: fallido
  const [validationError, setValidationError] = useState(null); // null: no hay error, 'email' o 'password': error de validaci�n
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    // Validar campos de entrada
    if (!email || !password) {
      setValidationError(!email ? 'email' : 'password');
      return;
    }

    // Simulaci�n de inicio de sesi�n exitoso
    setLoginStatus(true);
    setModalVisible(true);
  };

  return (
    <LinearGradient colors={['steelblue', 'skyblue']} style={styles.container}>
      <Text style={styles.titulo}>Test React Native + Expo</Text>
      <StatusBar style="auto" />
      <Text style={styles.subtitulo}>Nombre y Apellido</Text>
      <Text style={styles.subtitulo}>Login</Text>
      <TextInput
        placeholder="@gmail.com"
        style={[styles.input, validationError === 'email' && styles.inputError]}
        value={email}
        onChangeText={text => {
          setEmail(text);
          setValidationError(null); // Limpiar el error cuando se modifica el campo
        }}
      />
      <TextInput
        placeholder="password"
        style={[styles.input, validationError === 'password' && styles.inputError]}
        secureTextEntry
        value={password}
        onChangeText={text => {
          setPassword(text);
          setValidationError(null); // Limpiar el error cuando se modifica el campo
        }}
      />
      <TouchableOpacity onPress={handleLogin}>
        <LinearGradient colors={['#0099FF', '#00FFFF']} style={styles.button}>
          <Text style={styles.buttonText}>Aceptar</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¡Bienvenido, {email.split('@')[0]}!</Text>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
  },
  input: {
    color: 'white',
    fontStyle: 'italic',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
  },
  inputError: {
    borderColor: 'red',
  },
  button: {
    padding: 15,
    marginTop: 40,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
