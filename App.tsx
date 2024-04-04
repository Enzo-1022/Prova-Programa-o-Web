import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"

export default function App() {

  const [ baseTriangulo, setBase] = useState('');

  const [ alturaTriangulo, setAltura ] = useState('');

  const calculoAreaTriangulo = (parseFloat(baseTriangulo) * parseFloat(alturaTriangulo)) / 2;

  return (
    <View style={styles.container}>

      <Text >Calcular Area do triangulo </Text>

      <Text>Informe a area do triangulo</Text>
      <TextInput onChangeText={setBase} keyboardType="numeric" style={styles.Input}/>

      <Text>Informe a Altura do triangulo</Text>
      <TextInput onChangeText={setAltura} keyboardType="numeric" style={styles.Input}/>

      <Text> { calculoAreaTriangulo ? `${calculoAreaTriangulo}` : '' } </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input: {
    width: '90%',
    borderWidth: 2,
    padding: 5
  },
  Background: {
    position : 'absolute',
    top: 0,
    left: 0,
    height: "auto"
  }
});
