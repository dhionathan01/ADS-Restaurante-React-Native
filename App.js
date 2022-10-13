import * as React from 'react'
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Topo from "./assets/components/Topo";
import Logo from './assets/components/Logo';
import ListaPratos from './assets/components/ListaPratos';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import Menu from './assets/components/Menu';
import { ScrollView } from 'react-native-gesture-handler';
import Rodape from './assets/components/Rodape';
const Pratos = [
    {
        image: require('./assets/img/prato1.jpg'),
        title: 'Star-Fitness',
        preco: 'R$22,90',
        ingredientes: 'Frango, batata, Alface, Tomate'
    },
    {
        image: require('./assets/img/prato2.jpg'),
        title: 'Star-Completo',
        preco: 'R$39,90',
        ingredientes: 'Linguiça, alface, tomate, cenoura, ovo'
    },
    {
        image: require('./assets//img/prato3.jpg'),
        title: 'Star-Tradicional',
        preco: 'R$27,90',
        ingredientes: 'Carne de boi, arroz, tomate, alface, feijão'
    },
    {
        image: require('./assets/img/prato4.jpg'),
        title: 'Star-Fritas',
        preco: 'R$34,90',
        ingredientes: 'Carne de boi, fritas, molho',
    },
    {
        image: require('./assets/img/prato-executivo.jpg'),
        title: 'Star-Executivo',
        preco: 'R$47,90',
        ingredientes: 'Arroz, Ovo, Frango'
    }
]


export default function App() {
  const [fonteCarregada] = useFonts({
    "Bg": require('./assets/fonts/BubbleGum.ttf'),
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    
  });

  if (!fonteCarregada) {
    return <AppLoading/>
  }
    return (
      <SafeAreaProvider>  
        <ScrollView>
            <View>
            <Topo/>
            <Logo/>
                <ListaPratos Pratos={Pratos} />
                <Menu Pratos={Pratos} />
                <Rodape></Rodape>    
            </View>
        </ScrollView>    
      </SafeAreaProvider>
            
  );
}