import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Repository from '../components/Repository';

import {addRepositories} from '../store/modules/repositories/actions';

const HomeScreen = props => {
  const dispatch = useDispatch();

  /* Here we check if props -> loading is false to addRepositories,
  in other way, if loading === true we have that no response was back
  them repositories still undefined.
  */
  useEffect(() => {
    if (!props.repositories.loading) {
      dispatch(addRepositories(props.repositories.search.edges));
    }
  }, [dispatch, props.repositories]);

  // We take all repositories on redux state to put them in FlatList
  const repositories = useSelector(state => state.repositories);
  return (
    <SafeAreaView>
      {props.repositories.loading ? (
        <Text>Carregando ...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={repositories}
          renderItem={({item}) => {
            const {
              id,
              description,
              nameWithOwner,
              stargazers,
              issues,
              forks,
              url,
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
                url={url}
                assignableUsersImages={assignableUsers.edges}
              />
            );
          }}
          keyExtractor={item => item.node.id}
        />
      )}
    </SafeAreaView>
  );
};

/* Query using graphQL, return to us all repositories, in search we have:
query: "is:public" => take public projects (if we put "is-private") we take the
projects private by the SSH
type: REPOSITORY => take repositories
first: 25 => take the first 25 repositories on the list
*/
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
            url
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
