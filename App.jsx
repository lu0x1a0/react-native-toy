import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/Home.jsx'
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={[styles.container, {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "row"
        }]}>
        <View style={{ flex: 2, height:"100%", backgroundColor: "red" }}>
          <Text>Red</Text>
        </View>
        <View style={{ flex: 6, height:"100%", backgroundColor: "green" }}>
          <Home time="2"/>
        </View>
        <View style={{ flex: 2, height:"100%", backgroundColor: "darkorange" }}>
          <Text>Orange</Text>
        </View>

      </View>
      
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
});
