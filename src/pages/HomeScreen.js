import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Repository from '../components/Repository';

import {addRepositories} from '../store/modules/repositories/actions';

const HomeScreen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!props.repositories.loading) {
      dispatch(addRepositories(props.repositories.search.edges));
    }
  }, [dispatch, props.repositories]);

  const repositories = useSelector(state => state.repositories);
  console.log(repositories);
  return (
    <SafeAreaView>
      {props.repositories.loading ? (
        <Text>Carregando ...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={props.repositories.search.edges}
          renderItem={({item}) => {
            const {
              id,
              description,
              nameWithOwner,
              stargazers,
              issues,
              forks,
              assignableUsers,
            } = item.node;
            return (
              <Repository
                id={id}
                name={nameWithOwner}
                description={description}
                totalStars={stargazers.totalCount}
                totalForks={forks.totalCount}
                totalOpenedIssues={issues.totalCount}
                assignableUsersImages={assignableUsers.edges}
                navigation={props.navigation}
              />
            );
          }}
          keyExtractor={item => item.node.id}
        />
      )}
    </SafeAreaView>
  );
};

const RepositoriesQuery = gql`
  query {
    search(query: "is:public", type: REPOSITORY, first: 25) {
      edges {
        node {
          ... on Repository {
            id
            description
            nameWithOwner
            stargazers {
              totalCount
            }
            issues(states: OPEN) {
              totalCount
            }
            forks {
              totalCount
            }
            assignableUsers(first: 4) {
              edges {
                node {
                  avatarUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

const styles = StyleSheet.create({
  list: {
    margin: 15,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#d1d5da',
    borderStyle: 'solid',
  },
});

export default graphql(RepositoriesQuery, {name: 'repositories'})(HomeScreen);
