import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from '../style/formStyle';

export default class FocusedTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { hasFocus: false };
  }

  render() {
    return (
      <TextInput
        style={this.state.hasFocus ? styles.finput : styles.input}
        onFocus={this.setFocus.bind(this, true)}
        onBlur={this.setFocus.bind(this, false)}
        placeholder={this.props.placeholder}
        secureTextEntry={false || this.props.secureTextEntry}
        keyboardType={"" || this.props.keyboardType}
        autoCapitalize = {this.props.autoCapitalize && true}
      />
    );
  }
  setFocus(hasFocus) {
    this.setState({ hasFocus });
  }
}
