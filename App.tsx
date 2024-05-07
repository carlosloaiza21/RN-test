/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from './src/screens/Home';
import {List} from './src/screens/List';
import {Tasks} from './src/screens/Tasks';
import {store} from './src/store';
import {Provider} from 'react-redux';

export type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Task: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="List"
            component={List}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Task"
            component={Tasks}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
