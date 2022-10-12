import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Tile } from '@rneui/themed';

const Logo = () => {
  const window = useWindowDimensions();
  return (
    <Tile
      imageSrc={require('../img/restaurante.jpg')}
      titleStyle={{ fontSize: 17, fontWeight: '', color: 'white' }}
      featured
      width={window.width}
      height={200}
    />
  );
};

export default Logo;