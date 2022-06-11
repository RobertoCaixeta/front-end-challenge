import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { indexAulas } from '../services/api';

export default function Index({ navigation }) {
  const [aulas, setAulas] = useState([])
  const [role, setRole] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem('ROLE').then((userRole) => {
      if ((userRole === "admin") || (userRole === "teacher")) {
        setRole(true)
      }
    })

  }, []);

  useEffect(() => {
    indexAulas.then(({ data }) => {
      setAulas(data)
    })
      .catch((error) => {
        console.log(error, "Erro ao listar aulas")
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Aulas</Text>
      <View>
        <ScrollView>
          {aulas.map((aula) => {
            return (
              <View key={aula.id} style={styles.aulaContainer}>
                <Text style={styles.text}>Nome da aula: {aula.name}</Text>
                <Text style={styles.text}>Nome do professor: {aula.teacher_name}</Text>
                <Text style={styles.text}>Duração: {(aula.duration) / 60} minutos</Text>
                <Text numberOfLines={4} style={styles.text}>Descrição: {aula.description}</Text>
                <View style={styles.buttonContainer}>
                  <Button
                    style={styles.button}
                    title='Abrir aula'
                    onPress={() => navigation.navigate("show", { aula })}
                  />
                  {role &&
                    <Button
                      style={styles.button}
                      title='Editar'
                      onPress={() => navigation.navigate("edit", { aula })}
                    />
                  }
                </View>

              </View>
            );
          })}
        </ScrollView>
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
  title: {
    color: "#fff",
    fontSize: 50
  },
  aulaContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "column",
    height: 200,
    padding: 5,
    marginVertical: 5,
    width: 350
  },
  text: {
    color: "#000",
    fontSize: 15
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