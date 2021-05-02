import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons";
// import { Button } from "../components/Button";

import wateringImg from "../assets/watering.png";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { useNavigation } from "@react-navigation/core";

export function Welcome() {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("UserIdentification");
  }

  return (
    // SafeAreaView é uma View mas que ele não deixa ficar atrás da orelhinha do iphone
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {"\n"} suas plantas de {"\n"} forma fácil
        </Text>
        <Image source={wateringImg} style={styles.image} resizeMode="contain" />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleNavigate}
        >
          <FeatherIcon name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.heading,
    lineHeight: 34,
    fontSize: 32,
    fontWeight: "bold",
    color: colors.heading,
    textAlign: "center",
    marginTop: 38,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
    paddingHorizontal: 10,
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },
});
