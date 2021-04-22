import React from 'react';
import { Text,  Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button';
import colors from '../styles/colors'

export function Welcome() {
  return (  
    // SafeAreaView é uma View mas que ele não deixa ficar atrás da orelhinha do iphone
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie suas plantas de forma fácil
      </Text>
      <Image source={wateringImg} style={styles.image}/>
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button title="Avançar"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.heading,
    textAlign: 'center',
    marginTop: 38,
    width:222,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    width: 293,
    height:285,
  },
  
})