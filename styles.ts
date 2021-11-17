import { StyleSheet} from 'react-native';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: getStatusBarHeight (),
  },
  pic:{
    width: 100,
    height: 100,
    justifyContent: 'center',
    marginTop:2,
    marginBottom:2,
    marginLeft:100,
    borderRadius:10,
  },
  intro:{
    textAlign:'center',
    fontSize:11,
    backgroundColor:'#f5f5f5',
    marginTop:10,
    borderRadius:5, 
    marginBottom:2,
    marginRight:1,
    marginLeft:1, 
  },
  txtsub:{
    alignItems: 'center',
    textAlign:'center',
    marginRight:30,
    marginLeft:30,
    marginTop:10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor:'#778899',     
  },
  btn:{
    marginTop:10,
    marginBottom:10,
    marginRight:80,
    marginLeft:80,
    borderWidth:3,
    borderRadius:10,
    borderColor:`#778899`,
    padding:3,
    backgroundColor:`#778899`,
    alignItems: 'center',
    
  },
  fic:{
    marginTop:10,
    flexDirection: 'column',
  },
  title:{
    color: `black`, 
    fontWeight: 'bold', 
    textAlign:'center',
    marginTop:10,
    marginBottom:10,
    fontSize:18,
  },
  rpg:{
    color: `black`, 
    marginTop:10,
    marginBottom:10,
    fontSize:16,
    textAlign:'justify',
  },

})

export {styles};