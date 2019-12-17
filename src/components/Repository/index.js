import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Card from '../Card';
import {
  addFavorite,
  removeFavorite,
} from '../../store/modules/favorites/actions';

const Repository = ({
  id,
  name,
  description,
  totalStars,
  totalForks,
  totalOpenedIssues,
  assignableUsersImages,
  navigation,
}) => {
  const [isFav, setIsFav] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (navigation.state.key === 'HomeScreen') {
      setIsFav(false);
    } else {
      setIsFav(true);
    }
  }, [navigation.state.key]);

  function handleAddFavorite() {
    setIsFav(true);

    let favorite = {
      id,
      name,
      description,
      totalStars,
      totalForks,
      totalOpenedIssues,
      assignableUsersImages,
    };

    dispatch(addFavorite(favorite));
  }

  function handleRemoveFavorite() {
    setIsFav(false);
    dispatch(removeFavorite(id));
  }

  //   console.log(assignableUsersImages.map(i => i.node.avatarUrl));
  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(!open)} style={styles.container}>
        <Text style={styles.title}>
          {/* <Icon name="repo" size={20} color="#000" /> */}
          {name}
        </Text>
        {!isFav ? (
          <TouchableOpacity style={styles.button} onPress={handleAddFavorite}>
            <Text>
              {/* <Icon name="star" size={15} /> */}
              Favoritar
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={handleRemoveFavorite}>
            <Text>
              {/* <Icon name="star" size={15} /> */}
              Remover
            </Text>
          </TouchableOpacity>
        )}
        <Text style={styles.stars}>
          {/* <Icon name="star" size={15} /> */}
          {totalStars}
        </Text>
      </TouchableOpacity>
      {open ? (
        <Card
          description={description}
          forks={totalForks}
          issues={totalOpenedIssues}
          images={assignableUsersImages}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 25,
    paddingBottom: 60,
    borderBottomWidth: 1,
    borderColor: '#d1d5da',
    borderStyle: 'solid',
  },
  title: {
    width: '75%',
    display: 'flex',
    justifyContent: 'flex-start',
    fontWeight: '600',
    color: '#0366d6',
    fontSize: 18,
  },
  stars: {
    position: 'absolute',
    paddingTop: 60,
    paddingLeft: 25,
    color: '#586069',
  },
  button: {
    padding: 10,
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#dcdc',
    borderStyle: 'solid',
  },
});

export default Repository;
