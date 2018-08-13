import React from 'react';
import { Button, View, Text } from 'react-native';
import { createNavigator, StackRouter, StackView, createNavigationContainer } from 'react-navigation';
import MainScreen from './src/components/MainScreen';
import SubScreen from './src/components/SubScreen';

function createStackNavigator(routeConfigMap, stackConfig) {
  const router = StackRouter(routeConfigMap, stackConfig);
  const Navigator = createNavigator(StackView, router, stackConfig);
  return createCustomNavigator(Navigator);
}

const StackNavigator = (routeConfigs, config) => {
  const navigator = createStackNavigator(routeConfigs, config);
  return createNavigationContainer(navigator);
};

function createCustomNavigator(WrappedComponent) {
  return class NavigatorWrapper extends React.Component {
    static router = WrappedComponent.router;
    render() {
      const { navigation } = this.props;
      const customNavigationProp = {
        ...navigation,
        dispatch: "I am completely custom dispatch, even not a function" // this is made to pass custom dispatch prop
      };
      const newProps = {
        ...this.props,
        navigation: customNavigationProp
      }
      return <WrappedComponent {...newProps}/>
    }
  }
}

const RootStack = StackNavigator(
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
