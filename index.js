/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import EntryPoint from './entrypoint';

AppRegistry.registerComponent(appName, () => EntryPoint);
