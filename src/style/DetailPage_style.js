import react from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 25,
      },
    wrapper:{
        width:359,
        height:388,
        backgroundColor: "#FEF5EC",
        justifyContent:'center',
        alignItems:'center', marginBottom:20
    },
    img:{
        width:297,
        height:340,
    },
    heart:{
        width:25,
        height:25,
        justifyContent:'flex-start',
        margin:10
      },
      button:{
        width:269,
        height:54,
        backgroundColor:'#E94141',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
      }
})

export default styles;