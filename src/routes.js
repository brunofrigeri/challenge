import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './pages/HomeScreen';
import FavoriteScreen from './pages/FavoriteScreen';

const mainNav = createBottomTabNavigator({
  HomeScreen,
  FavoriteScreen,
});

export default createAppContainer(mainNav);
