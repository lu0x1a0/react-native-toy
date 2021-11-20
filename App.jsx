import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/Home.jsx'

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground source={require('./assets/icon.png')} resizeMode="cover" style={styles.image}>
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "row"
          }]}>
          <View style={{ flex: 2, height:"100%" }}>
            <Text>Red</Text>
          </View>
          <View style={{ flex: 6, height:"100%" }}>
            <Home time="2"/>
          </View>
          <View style={{ flex: 2, height:"100%" }}>
            <Text>Orange</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
    
  );
  //<View>
  //  <Home time = "2"/>
  //</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
