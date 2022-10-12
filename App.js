import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Topo from "./assets/components/Topo";
import Logo from './assets/components/Logo';
import ListaPratos from './assets/components/ListaPratos';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Topo></Topo>
      </View>
      <View>
          <Logo></Logo>
      </View>
      <View>
        <ListaPratos></ListaPratos>
      </View>
     
    </SafeAreaView>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
