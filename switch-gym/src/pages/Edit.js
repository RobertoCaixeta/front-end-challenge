import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';


const token = AsyncStorage.getItem("TOKEN")

export default function Edit({ route, navigation }) {
  const [name, setName] = useState("")

  const handleDelete = () => {
    api.delete("/gym_classes/" + route.params.aula.id, {
      
        authorization: token
      
    }
    )
      .then(() => {
        Alert.alert("Aula removida")
        navigation.navigate("index")
      })
      .catch((error) => console.log(error, "erro em remover aula"))
  }

  const handleUpdate = () => {
    api.patch("/gym_classes/" + route.params.aula.id, {
      gym_class: {
        name: name,
      },
      
    })
      .then(() => {
        navigation.navigate("index")
      })
      .catch((error) => console.log(error, "erro em atualizar a aula"))
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputTextArea}>
        <Text style={styles.title} >Editar Aula</Text>
        <Text style={styles.label} >Nome da aula</Text>
        <TextInput
          style={styles.input}
          placeholder='Nome'
          value={name}
          onChangeText={setName}
        />
        <Button
          title='Atualizar'
          onPress={() => handleUpdate()}
        />
        <Button
          title='Remover aula'
          onPress={() => handleDelete()}
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