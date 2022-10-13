import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const Rodape = () => {
    return (
        <>
            <View style={styles.footer}>
                <Text>Teste</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#2a2a2a',
        height: '10%',

    },
    fontRodape: {
        fontFamily: 'bublegum'
    }
})
export default Rodape;
