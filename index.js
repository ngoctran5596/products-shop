/**
 * 
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import App from './App';
import Produce from './Screen/Produce'
import App from './src/App'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
