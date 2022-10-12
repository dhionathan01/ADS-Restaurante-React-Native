import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Image } from '@rneui/themed';

const images = [
    { name: require('../img/prato1.jpg') },
    { name: require('../img/prato2.jpg') },
    { name: require('../img/prato3.jpg') },

];

const ListaPratos = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Pratos do dia
            </Text>
            <FlatList
                horizontal
                data={images}
                renderItem={({ item }) =>
                    <View style={styles.item}>
                        <Image
                            source={item.name}
                            style={styles.fotoUnica}
                            resizeMode="cover"
                        />
                    </View>}
                showsHorizontalScrollIndicator={false}
                style={styles.foto}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#392620',
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: 24,
        paddingLeft: 24,
    },
    item: {
        margin: 10,
    },
    fotoUnica: {
        width: 200,
        height: 200,
        borderRadius: 15,
    },
    foto: {
        padding: 10,
        marginBottom: 10
    }
});

export default ListaPratos;