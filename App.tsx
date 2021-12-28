
import { StyleSheet, View } from 'react-native';
import { Routes } from './src/Routes';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
     <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
});
