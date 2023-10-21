import { View, Text, Pressable, FlatList, Image } from "react-native";
import React, { useState } from "react";
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";
import styles from "../style/HomePage_style";
import font from "../style/AppFont";
const arr = [
  {
    id: 1,
    source: require("../../assets/xedo.png"),
    name: "Pinarello",
    price: "1800",
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    style: "Mountain",
  },
  {
    id: 2,
    source: require("../../assets/xedo.png"),
    name: "Pina Mountai",
    price: "1700",
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    style: "Mountain",
  },
  {
    id: 3,
    source: require("../../assets/xetim.png"),
    name: "Pina Bike",
    price: "1500",
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    style: "Roadbike",
  },
  {
    id: 4,
    source: require("../../assets/xedonhungkhac.png"),
    name: "Pinarello",
    price: "1900",
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    style: "Roadbike",
  },
  {
    id: 5,
    source: require("../../assets/xetim.png"),
    name: "Pinarello",
    price: "2700",
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    style: "Roadbike",
  },
  {
    id: 6,
    source: require("../../assets/xedo.png"),
    name: "Pinarello",
    price: "1350",
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    style: "Roadbike",
  },
];
const HomePage = ({ navigation, route }) => {
  const [select, setSelect] = useState(true);
  const [roadbike, setRoadBike] = useState(false);
  const [mountain, setMountain] = useState(false);
  const [data, setData] = useState(arr);
  const [img, setImg] = useState();

  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 20 }}>
        <Text
          style={[
            font.fontU,
            { fontSize: 25, color: "#E94141", textAlign: "left" },
          ]}
        >
          The world’s Best Bike
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Pressable
          style={select ? styles.selectButton : styles.button}
          disabled={select ? true : false}
          onPress={() => {
            setSelect(!select);
            setMountain(false);
            setRoadBike(false);
            setData(arr);
          
          }}
        >
          <Text>All</Text>
        </Pressable>
        <Pressable
          style={roadbike ? styles.selectButton : styles.button}
          onPress={() => {
            setRoadBike(!roadbike);
            setSelect(false);
            setMountain(false);

            const roadbike = arr.filter((item) => {
              return item.style == "Roadbike";
            });
            setData(roadbike);
          }}
        >
          <Text>Roadbike</Text>
        </Pressable>
        <Pressable
          style={mountain ? styles.selectButton : styles.button}
          onPress={() => {
            setData(arr);
            setMountain(!mountain);
            setSelect(false);
            setRoadBike(false);

            const mountain = arr.filter((item) => {
              return item.style == "Mountain";
            });
            setData(mountain);
          }}
        >
          <Text>Mountain</Text>
        </Pressable>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop:20 }}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item, index }) => (
            <Pressable
              key={item.id}
              onPress={() => {
                console.log(item);
                navigation.navigate({
                  name: "Detail",
                  params: { post: item },
                  merge: true,
                });
              }}
              style={styles.imgWrapper}
            >
              <Image
                style={styles.heart}
                source={require("../../assets/heart.png")}
                resizeMode="stretch"
              />

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  style={styles.img}
                  source={item.source}
                  resizeMode="contain"
                />
                {/* <Image source={item.source} style={styles.img} /> */}
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default HomePage;
