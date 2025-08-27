import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';




export default function App() {

  const [img1, setImg1] = useState(require('./src/Kris.png'));
  const [img2, setImg2] = useState(require('./src/Susie.png'));
  const [img3, setImg3] = useState(require('./src/Lancer.png'));

  return (
    <View style={{flex: 1, backgroundColor: '#222'}}>
      <View style={{...styles.containerTopo, backgroundColor: '#222'}}>
        <Text style={{marginTop: 30, fontSize: 25, color: '#fff'}}>Imagens e botões</Text>
      </View>
      <View style={{...styles.containerMeio, flexDirection: 'row', backgroundColor: '#222'}}>
        <View style={{...styles.containerMeio, backgroundColor: '#222'}}>
          <Image source={img1} style={styles.img} /> 
          <Button title="Trocar IMG1" onPress={() => {
            if (img1 === require('./src/Kris.png')) {
              setImg1(require('./src/Ralsei.png'));
            }
            else{
              setImg1(require('./src/Kris.png'));
            }
          }} />
        </View>
        
        <View style={{...styles.containerMeio, backgroundColor: '#222'}}>
          <Image source={img2} style={styles.img} />
          <Button title="Trocar IMG2" onPress={() => {
            if (img2 === require('./src/Susie.png')) {
              setImg2(require('./src/Noelle.png'));
            }
            else{
              setImg2(require('./src/Susie.png'));
            }
          }} />
        </View>
        
        <View style={{...styles.containerMeio, backgroundColor: '#222'}}>
          <Image source={img3} style={styles.img} />
          <Button title="Trocar IMG3" onPress={() => {
            if (img3 === require('./src/Lancer.png')) {
              setImg3(require('./src/Dummy.png'));
            }
            else{
              setImg3(require('./src/Lancer.png'));
            }
          }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMeio: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTopo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    width: 38,
    height: 76
  }
});
