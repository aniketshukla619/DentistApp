import { StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default StyleSheet.create({


  input: {
  width:'100%',
  padding:9,
    height: 50,
    borderColor: 'rgb(200,200,200)',
    borderWidth: 1,
    fontSize:17,
    placeholderTextColor: 'rgb(54,54,54)',
    borderRadius: 4,
  },
  finput: {
  width:'100%',
  padding:9,
  fontSize:17,
    height: 50,
    borderColor: '#0df',
    borderWidth: 1,
    placeholderTextColor: 'rgb(54,54,54)',
    borderRadius: 4,
  },
  inputstyle :{
  alignItems:'center',
  marginTop:22,
  },
  viewstyle:{
  marginLeft:24,
  marginRight:23,
  },
  Button1: {
    padding: 10,
    borderRadius: 24,
    marginTop:18,
    height: 50,
    width: '45%',
    backgroundColor: '#7a42f4',
  },
  Button2: {
    padding: 10,
    marginTop: 18,
    borderRadius: 24,
    height: 50,
    width: '45%',
    backgroundColor: 'rgba(216,0,11,0.11)',
  },
  ButtonText1: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
  },
  ButtonText2: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgb(216,0,11)',
  },
  buttons: {
    marginLeft:24,
    marginRight:23,
    marginTop:16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  step: {
    width: 292,
    height: 18,
    marginTop: 74,
    marginLeft: 20,
    marginRight: 60,
    
  },
  steptext:{
  letterSpacing: 6.06,
    fontSize: 14,
    color: 'rgb(54,54,54)',
  },
  
  heading: {
    marginLeft:15,
    marginTop: 12,
    marginRight: 42,
  },
  textheading:{
  fontSize: 40,
    color: 'rgb(8,46,95)',
    fontWeight: 'bold',
    letterSpacing: -0.96,
  
  },
  shape: {
    marginTop:22,
    width: 313,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    marginLeft:24,
    borderColor: 'rgb(200,200,200)',
  },
  togglebutton :{
  marginLeft:24,
  marginRight:23,
  marginTop:18,
  marginBottom:18,
  flexDirection: 'row',
  flex: 1,
  justifyContent:'space-between',
    },
  toggleview:{
  height:'100%',
  justifyContent:'center',
  },
  toggletext:{
  alignItemsVertical:'center',
  color:'rgb(8,46,95)',
  },

});
