import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Image } from '@rneui/themed';

const Pratos = [
    {
        image: require('../img/prato1.jpg'),
        title: 'Star-Fitness',
        preco: 'R$22,90',
    },
    {
        image: require('../img/prato2.jpg'),
        title: 'Star-Completo',
        preco: 'R$39,90'
    },
    {
        image: require('../img/prato3.jpg'),
        title: 'Star-Tradicional',
        preco: 'R$27,90'
    },
    {
        image: require('../img/prato4.jpg'),
        title: 'Star-Fritas',
        preco: 'R$34,90'
    },
    {
        image: require('../img/prato-executivo.jpg'),
        title: 'Star-Executivo',
        preco: 'R$47,90'
    }
]

const ListaPratos = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Pratos do dia:
            </Text>
            <FlatList
                horizontal
                data={Pratos}
                renderItem={({ item }) =>
                    <View style={styles.item}>
                        <Image
                            source={item.image}
                            style={styles.fotoUnica}
                        />
                        <Text style={styles.legenda}>{item.title}</Text>
                        <Text style={styles.preco}>{item.preco}</Text>
                    </View>}
                style={styles.foto}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A2A2A',
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: 24,
        paddingLeft: 24,
    },
    legenda: {
        color: '#FFF',
        fontSize: 10,
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
    },
    preco: {
        color: '#FFF',
        fontSize: 13,
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
    },
    item: {
        margin: 10,
    },
    fotoUnica: {
        width: 125,
        height: 125,
        borderRadius: 15,
    },
    foto: {
        padding: 10,
        marginBottom: 10
    }
});

export default ListaPratos;