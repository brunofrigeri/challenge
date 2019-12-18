import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import FavoriteScreen from './pages/FavoriteScreen';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

// Variable that receive the Tab Navigator initializer
const mainNav = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        // Here we add an icon on tab Home
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
      },
    },
    Favoritos: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-star'} />
          </View>
        ),
      },
    },
  },
  {
    // Configuration for initial state of the bottom tab
    initialRouteName: 'Home',
    activeColor: '#fff',
    inactiveColor: '#bda1f7',
    barStyle: {backgroundColor: '#694fad'},
  },
);

export default createAppContainer(mainNav);
