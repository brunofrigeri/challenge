import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';

import Repository from '../components/Repository';

const FavoriteScreen = props => {
  const favorites = useSelector(state => state.favorites);
  return (
    <SafeAreaView>
      {favorites ? (
        <FlatList
          style={styles.list}
          data={favorites}
          renderItem={({item}) => {
            const {
              id,
              name,
              description,
              totalStars,
              totalForks,
              totalOpenedIssues,
              assignableUsersImages,
            } = item;
            return (
              <Repository
                id={id}
                name={name}
                description={description}
                totalStars={totalStars}
                totalForks={totalForks}
                totalOpenedIssues={totalOpenedIssues}
                assignableUsersImages={assignableUsersImages}
                navigation={props.navigation}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>Não há favoritos no momento.</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    margin: 15,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#d1d5da',
    borderStyle: 'solid',
  },
});

export default FavoriteScreen;
