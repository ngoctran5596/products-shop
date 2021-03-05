import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Produce from '../Screen/Produce';
import Insert from '../Screen/Insert';
import upDate from '../Screen/upDate';
import Cart from "../Screen/Cart";

const Stack = createStackNavigator ();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode="none">
        <Stack.Screen name="Produce" component={Produce} />
        <Stack.Screen name="Insert" component={Insert} />
        <Stack.Screen name="upDate" component={upDate} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
