import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Cadastro() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <Text>Senha</Text>
      <TextInput
        placeholder='Senha'
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
    </View>
  );

  const styles = StyleSheet.create({
    container: {

    },
    label: {

    }
  })
}  
