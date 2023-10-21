import react from 'react'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical:20
      },
      imgWrapper:{
        width:360,
        height:388,
        backgroundColor:'#F7E5E4',
        justifyContent:'flex-end',
        alignItems:'center',
        borderRadius:50
      },
      img:{
        width:292,
        height:270,
        marginBottom:50
      },
      button:{
        width:340,
        height:60,
        backgroundColor:'#E94141',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
      }
})
export default styles;