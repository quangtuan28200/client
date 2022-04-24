import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { images } from "../../constants/index";

const { logo } = images;

const Intro = () => {
  return (
    <View>
      <Image style={styles.logo} source={logo}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default Intro;
