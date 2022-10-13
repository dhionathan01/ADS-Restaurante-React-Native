import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Image } from '@rneui/themed';


const ListaPratos = ({ Pratos }) => {
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
        fontFamily: 'Bubblegum'
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