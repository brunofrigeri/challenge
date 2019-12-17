import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ImagesList = ({images}) => {
  return (
    <View style={styles.collaborators}>
      <Text style={styles.text}>Built by</Text>
      {images.map((img, idx) => (
        <Image
          style={styles.imagesCollaborators}
          key={idx}
          source={{uri: img.node.avatarUrl}}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginRight: 10,
    color: '#586069',
  },
  collaborators: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  imagesCollaborators: {
    width: 35,
    height: 35,
    marginRight: 4,
    borderRadius: 3,
  },
});

export default ImagesList;
