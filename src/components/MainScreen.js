import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class MainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Screen</Text>
        <Button
          title="Go to second screen"
          onPress={() => this.props.navigation.navigate('SubScreen')}
        />
      </View>
    );
  }
}

export default MainScreen;
