import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import api from '../services/api';


export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  useEffect(() => {
    AsyncStorage.removeItem('TOKEN')

  }, []);
  const Login = () => {
    api
      .post("/users/login", {
        user: {
          email: email,
          password: senha,
        }

      }
      ).then((response) => {
        AsyncStorage.setItem("ROLE", response.data.role)
        AsyncStorage.setItem("TOKEN", response.headers.authorization)
        navigation.navigate("index")
      }).catch((error) => {
        Alert.alert("Erro ao fazer login!")
      })
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputTextArea}>
        <Text style={styles.title} >Switch Gym</Text>
        <Text style={styles.label} >Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label} >Senha</Text>
        <TextInput
          style={styles.input}
          placeholder='Senha'
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />

        <Button
          title='Entrar'
          onPress={() => Login()}
        />
      </View>
    </View>
  );


}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#33ccff",
    flex: 1,
    alignItems: 'center',
  },
  input: {
    backgroundColor: "#fff",
    height: 40,
    width: 200,
    marginVertical: 15,
    elevation: 2,
    borderRadius: 10,
    paddingLeft: 5

  },
  label: {
    color: "#fff",
    fontSize: 25
  },
  title: {
    color: "#fff",
    fontSize: 50
  },
  inputTextArea: {
    alignItems: 'center',
  },
  text: {
    color: "#fff",
    fontSize: 15,
    marginVertical: 10,
  }
})
