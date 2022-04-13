import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

boxView:{
    alignItems:'center'
},

textInput:{
    width:"50%",
    height:40,
    margin:12,
    backgroundColor:'#D3D3D3',
    paddingLeft:10,
    borderRadius:25
    
},

btnCalc:{
    borderRadius: 25, 
      alignItems: "center",
      justifyContent: "center",
      width: "12%",
      backgroundColor: "#FFA500",
      paddingTop: 14,
      paddingBottom: 14,
      marginLeft: 12,
      marginTop: 30,
},

statusMedia:{
    fontWeight:'bold',
},

resultMedia:{
      color:'#FFA500'
}

});
export default styles