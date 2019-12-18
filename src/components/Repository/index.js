/* This component is responsable for each repository, what means
that each one repository enters in here and carry information like
name, description, url, totalStarsCount, etc, to build the Repository
card list
*/
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/Octicons';
// Icon.loadFont();

import Card from '../Card';
import {
  addFavorite,
  removeFavorite,
} from '../../store/modules/favorites/actions';
import {updateRepository} from '../../store/modules/repositories/actions';

const Repository = ({
  id,
  name,
  description,
  totalStars,
  totalForks,
  totalOpenedIssues,
  url,
  assignableUsersImages,
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const fav = useSelector(state =>
    state.repositories.filter(repo => repo.node.id === id),
  ).map(repo => repo.node.isFav)[0];

  // Function responsable for adding a new favorite in favorites list
  function handleAddFavorite() {
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
    dispatch(updateRepository(id, true));
  }

  // Function responsable for removing a respective favorite in favorites list
  function handleRemoveFavorite() {
    dispatch(removeFavorite(id));
    dispatch(updateRepository(id, false));
  }

  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(!open)} style={styles.container}>
        <View style={styles.titleContainer}>
          {/* <Icon name="repo" size={20} color="#000" /> */}
          <Text style={styles.title}>{name}</Text>
        </View>
        {!fav ? (
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddFavorite}>
            <Text>
              {/* <Icon name="star" size={15} /> */}
              Favoritar
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.removeButton}
            onPress={handleRemoveFavorite}>
            <Text>Remover</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.stars}>
          {/* <Icon name="star" size={15} /> */}
          {totalStars} stars
        </Text>
      </TouchableOpacity>
      {open ? (
        <Card
          description={description}
          forks={totalForks}
          issues={totalOpenedIssues}
          images={assignableUsersImages}
          url={url}
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
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    width: '90%',
    display: 'flex',
    justifyContent: 'flex-start',
    fontWeight: '600',
    color: '#0366d6',
    fontSize: 18,
    marginLeft: 5,
  },
  stars: {
    position: 'absolute',
    paddingTop: 60,
    paddingLeft: 25,
    color: '#586069',
  },
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

export default Repository;
