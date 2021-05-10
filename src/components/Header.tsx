import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import avatarImg from "../assets/avatar.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Bruno</Text>
      </View>
      <Image style={styles.avatarImage} source={avatarImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },

  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
  avatarImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});
