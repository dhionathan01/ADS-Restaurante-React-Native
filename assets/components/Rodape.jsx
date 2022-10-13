import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, } from '@rneui/themed';

const Rodape = () => {
    return (
        <>
            <View style={styles.footer}>
            <Text style={styles.fontRodape}>Dhionathan Lanzoni Jobim - 12/10/2022  </Text>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#2a2a2a',
        height: 25,
        marginTop: 10

    },
    fontRodape: {
        margin: 3,
        color: '#fff',
        fontFamily: 'Bg',
    }
})
export default Rodape;
