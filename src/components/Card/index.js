import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import ImagesList from '../ImagesList';

// import Icon from 'react-native-vector-icons/Octicons';
// Icon.loadFont();

const Card = ({description, forks, issues, images}) => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>{issues}</Text>
      <Text style={styles.text}>{forks}</Text>
      {images ? <ImagesList images={images} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#dcdcdc',
  },
  text: {
    padding: 16,
    color: '#586069',
  },
});

export default Card;