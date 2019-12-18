/* This component is responsable for build the details card,
when the user clicks on some repository it opens a litle card below,
and that card is build in here.
*/
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import ImagesList from '../ImagesList';

// import Icon from 'react-native-vector-icons/Octicons';
// Icon.loadFont();

const Card = ({description, forks, issues, images, url}) => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>{description}</Text>
      <View style={styles.container}>
        {/* <Icon name="issue-opened" size={15} color="#000" /> */}
        <Text style={styles.textWithIcon}>{issues} opened issues.</Text>
      </View>
      <View style={styles.container}>
        {/* <Icon name="repo-forked" size={15} color="#000" /> */}
        <Text style={styles.textWithIcon}>{forks} forks.</Text>
      </View>
      <View style={styles.container}>
        {/* <Icon name="link-external" size={15} color="#000" /> */}
        <Text style={styles.textWithIcon}>{url}</Text>
      </View>
      {images ? <ImagesList images={images} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ededed',
  },
  text: {
    padding: 16,
    color: '#586069',
  },
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  textWithIcon: {
    marginLeft: 5,
    color: '#586069',
  },
});

export default Card;
