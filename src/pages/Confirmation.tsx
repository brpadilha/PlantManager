import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { useNavigation } from "@react-navigation/core";

export function Confirmation() {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("PlantSelect");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😁</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <View style={styles.footer}>
          <Button title="Começar" onPress={handleNavigate} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  emoji: {
    fontSize: 96,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 22,
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: "center",
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading,
  },
  footer: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 50,
  },
});
