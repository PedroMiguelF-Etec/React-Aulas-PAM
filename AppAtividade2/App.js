import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
 
export default function App() {
  const [texto, setTexto] = useState('Texto');
  const [numero, setNumero] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{texto} {numero}</Text>
      <Button title="Texto" onPress={function(){ 
        if (texto == "Texto"){
          setTexto("Palavra");
        }
        else{
          setTexto("Texto")
        }
        }} />

       <View style={styles.mesmalinha}>
        <Button 
          title="Numero +" 
          onPress={() => setNumero(numero + 1)} 
        />
        <Text> </Text>
        <Button 
          title="Numero -" 
          onPress={() => setNumero(numero - 1)} 
        />
      </View>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
  mesmalinha:{
    flexDirection: 'row',
  }
});