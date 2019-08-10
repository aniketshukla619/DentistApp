import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';
import Inputs from './components/inputs2';
import Icon from 'react-native-vector-icons/Ionicons'

import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return <Inputs />;
  }
}
