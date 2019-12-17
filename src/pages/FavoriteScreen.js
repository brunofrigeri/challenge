import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, Text, StyleSheet, FlatList, View} from 'react-native';

import Repository from '../components/Repository';

const FavoriteScreen = props => {
  const favorites = useSelector(state => state.favorites);
  return (
    <>
      {favorites.length !== 0 ? (
        <SafeAreaView>
          <Text style={styles.favorites}>
            Você tem {favorites.length}{' '}
            {favorites.length === 1 ? 'favorito.' : 'favoritos.'}
          </Text>
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
        </SafeAreaView>
      ) : (
        <View style={styles.noFavorites}>
          <Text style={styles.textNoFavorites}>
            Não há favoritos no momento.
          </Text>
        </View>
      )}
    </>
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
  noFavorites: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNoFavorites: {
    color: '#586069',
    fontSize: 20,
  },
  favorites: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 20,
  },
});

export default FavoriteScreen;
