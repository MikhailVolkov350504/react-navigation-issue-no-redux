import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainScreen from './src/components/MainScreen';
import SubScreen from './src/components/SubScreen';

const RootStack = createStackNavigator(
  {
    MainScreen: MainScreen,
    SubScreen: SubScreen,
  },
  {
    initialRouteName: 'MainScreen',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
