import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

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


      <Text>{calculoAreaTriangulo}</Text>
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
  Label: {
    
  },
  Input: {
    width: '90%',
    borderWidth: 2,
    padding: 5
  }
});
