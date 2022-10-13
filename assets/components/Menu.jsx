import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';


const Menu = ({Pratos}) => {
    return (
        <Card>
            <Card.Title>Menu</Card.Title>
            <Card.Divider />
            {Pratos.map((item) => {
                return (
                    <View style={styles.container}>            
                    <View>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={ item.image }
                        />
                    </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.name}>{item.title}</Text>
                            <Text style={styles.descricao}>{item.ingredientes}</Text>
                            <Text style={styles.preco}>{item.preco}</Text>
                        </View>
                    </View>
                );
            })}
        </Card>
    );
};

const styles = StyleSheet.create({
    fonts: {
        marginBottom: 8,
    },
    descricao: {
        marginBottom: 2
    },
    container: {
        flexDirection: 'row',
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 3,
        paddingVertical:5
    }, 
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    name: {
        fontSize: 20,
        marginTop: 5,
        fontWeight:'bold',
    },
    preco: {
        fontSize: 15,
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
    },
    menu: {
        backgroundColor: '#2a2a2a',
        color: '#fff'
    }
});

export default Menu;