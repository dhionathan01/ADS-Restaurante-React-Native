import React from 'react';
import { StyleSheet } from 'react-native';
import { Header as HeaderRNE } from '@rneui/themed';

const Topo = () => {
    return (
        <HeaderRNE
            rightComponent={{
                icon: 'bolt',
                color: '#fff',
            }}
            leftComponent={{
                icon: 'menu',
                color: '#fff',
            }}
            centerComponent={{
                 text: 'Restaurante Estrela Negra', style: styles.heading
            }}
            backgroundColor="#2A2A2A"
            containerStyle={{
                borderBottomColor: "transparent",
                paddingHorizontal: 20,
                paddingVertical: 20,
            }}
        />
    );
};

const styles = StyleSheet.create({
    heading: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default Topo;