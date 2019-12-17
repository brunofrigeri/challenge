import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const HomeScreen = props => {
  console.log(props.repositories);
  return (
    <SafeAreaView>
      {props.repositories.loading ? (
        <Text>Carregando ...</Text>
      ) : (
        props.repositories.search.edges.map((repo, idx) => (
          <View key={idx}>
            <Text>{repo.node.id}</Text>
            <Text>{repo.node.nameWithOwner}</Text>
          </View>
        ))
      )}
      <Text>HOME</Text>
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

export default graphql(RepositoriesQuery, {name: 'repositories'})(HomeScreen);
