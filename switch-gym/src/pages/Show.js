import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import api from '../services/api';


export default function Show({ route }) {
  const [aula, setAula] = useState({})
  useEffect(() => {
    api.get("/gym_classes/" + route.params.aula.id)
      .then(({ data }) => {
        setAula(data)
      })
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Nome da aula: {aula.name}</Text>
        <Text style={styles.text}>Nome do professor: {aula.teacher_name}</Text>
        <Text style={styles.text}>Duração: {(aula.duration) / 60} minutos</Text>
        <Text style={styles.text}>Começo: {aula.start_time}</Text>
        <Text style={styles.text}>Descrição: {aula.description}</Text>
      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#33ccff",
    flex: 1,
    alignItems: 'center',
    padding:10
  },
  title: {
    color: "#fff",
    fontSize: 50
  },
  text: {
    color: "#000",
    fontSize: 25,
    marginVertical: 15
  },
  button: {
    width: "10%",
    height: 1000,
    borderRadius: 100
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  }
})