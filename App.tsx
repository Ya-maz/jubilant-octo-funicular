import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navbar from './src/components/Navbar';

export default function App() {

  
  return (
    <View style={styles.container}>
      <Navbar />
      {/* <Text style={styles.text}>Hellf o world!</Text> */}
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dde1ec',
  },

});
