import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import api from '../services/api';

export default function Cadastro() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const handlePost = () => {
    api
      .post("/users", {
        user: {
          email: email,
          password: senha,
        }

      }
      ).then(({ data }) => console.log(data))
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
          title='Cadastrar'
          onPress={() => handlePost()}
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
  inputTextArea:{
    alignItems: 'center',
  }
})