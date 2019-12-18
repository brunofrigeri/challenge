import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
Icon.loadFont();

const Button = ({text, onPress, fav}) => {
  return (
    <TouchableOpacity
      style={fav ? styles.removeButton : styles.addButton}
      onPress={() => onPress()}>
      <Text>
        <Icon name="star" size={15} />
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    padding: 10,
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#dcdc',
    borderStyle: 'solid',
  },
  removeButton: {
    padding: 10,
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#dcdc',
    borderStyle: 'solid',
    backgroundColor: '#e75f5f',
  },
});

export default Button;
