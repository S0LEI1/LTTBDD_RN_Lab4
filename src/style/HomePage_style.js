import react from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  imgWrapper: {
    marginRight:10,
    marginBottom:10,
    width: 167,
    height: 210,
    backgroundColor: "#FEF5EC",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.4,
    borderRadius: 10,
  },
  img: {
    width: 108,
    height: 124,
  },
  button:{
    width:99,
    height:32,
    borderWidth:1,
    borderColor:'#E94141',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginVertical:10
  },
  selectButton:{
    backgroundColor:'#E94141',
    width:99,
    height:32,
    borderWidth:1,
    borderColor:'#E94141',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginVertical:10
  },
  heart:{
    width:25,
    height:25,
    justifyContent:'flex-start',
    margin:10
  }
});
export default styles;
