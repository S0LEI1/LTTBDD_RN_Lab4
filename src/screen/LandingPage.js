import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "../style/LandingPage_style";
import font from "../style/AppFont";

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={font.font26}>A premium online store for</Text>
        <Text style={font.font26}>sporter and their stylish choice</Text>
      </View>
      <View style={styles.imgWrapper}>
        <Image
          source={require("../../assets/xexanh.png")}
          resizeMode="stretch"
          style={styles.img}
        />
      </View>
      <View><Text style={font.fontU}>POWER BIKE</Text>
      <Text style={font.fontU}>SHOP</Text></View>
      <Pressable style={styles.button}
        onPress={()=>{
          navigation.navigate('Home')
        }}
      ><Text style={font.fontV}>Get Started</Text></Pressable>
    </View>
  );
};

export default LandingPage;
