import { StyleSheet } from 'react-native';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    padding: getStatusBarHeight (),
  },
})

export {styles};