import { View, Text, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../style/DetailPage_style";
import font from "../style/AppFont";

const DetailPage = ({ navigation, route }) => {
  const obj = route.params?.post;

  //   useEffect(() => {
  //     if (route.params?.post) {
  //         const obj = route.params?.post;
  //     }
  //   }, [route.params?.post]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.img} source={obj.source} resizeMode="contain" />
      </View>
      <Text
        style={[
          font.fontVol,
          { fontSize: 40, color: "black", textAlign: "left", marginVertical:30 },
        ]}
      >
        {obj.name}
      </Text>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Text style={[font.fontVol, { color: "#969696", marginRight: 50 }]}>
          15% OFF I 350$
        </Text>
        <Text style={[font.fontVol, { color: "black", fontSize: 25 }]}>
          {obj.price}$
        </Text>
      </View>
      <View>
        <Text
          style={[
            font.fontVol,
            {
              color: "black",
              fontSize: 25,
              textAlign: "left",
              marginVertical: 40,
            },
          ]}
        >
          Description
        </Text>
        <Text
          style={[
            font.fontVol,
            { color: "#969696", fontSize: 22, textAlign: "left" },
          ]}
        >
          {obj.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <Image
          style={styles.heart}
          source={require("../../assets/heart.png")}
          resizeMode="stretch"
        />
        <Pressable style={styles.button}
            onPress={()=>{
                navigation.navigate('Home')
            }}
        >
          <Text style={[font.fontVol, {fontSize:25, color:'#fff'}]}>Add to card</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DetailPage;
