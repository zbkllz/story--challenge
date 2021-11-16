import { StyleSheet } from 'react-native';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    padding: getStatusBarHeight (),
  },
  txtname:{
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor:'#778899',
   
  },
  btn:{
    marginTop:10,
    marginBottom:10,
    borderWidth:1,
    borderRadius:10,
    borderColor:`#e6e6fa`,
    padding:3,
    backgroundColor: `#e6e6fa`,
    
  }
})

export {styles};