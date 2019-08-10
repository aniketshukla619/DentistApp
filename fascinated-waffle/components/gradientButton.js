import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from '../style/formStyle';
import { LinearGradient } from 'expo-linear-gradient';

export default class GradientButton extends Component {

  render() {
    return (
      <LinearGradient
        colors={['rgb(65,216,221)', 'rgb(85,131,238)']}
        style={styles.Button1}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}>
        <Text style={styles.ButtonText1} onPress={this.props.act}>
          {this.props.value}
        </Text>
      </LinearGradient>
    );
  }
}
