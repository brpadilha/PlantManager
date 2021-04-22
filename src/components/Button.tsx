import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps {
  title: string;
}

export function Button({title}:ButtonProps) {
  return (
    <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}>
        <Text style={styles.textButton}>
          {title}
        </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,

    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  
  textButton: {
    color: colors.white,
    fontSize: 24
  }
})