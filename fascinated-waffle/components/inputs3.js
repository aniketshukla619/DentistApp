import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Picker,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../style/formStyle';
import FocusedTextInput from './focusedTextInput';
import PasswordInputText from 'react-native-hide-show-password-input'
import GradientButton from './gradientButton'
class Inputs3 extends Component {
  state = {
    states: ['', 'DL', 'KA', 'PN', 'MP'],
  };
  
  submit = () => {
    alert('email :');
  };
  render() {
    return (
      <View>
      <View style={styles.step}>
        <Text style={styles.steptext}> STEP 3/3 </Text>
      </View>
      <View style={styles.heading}>
        <Text style={styles.textheading}> Account{'\n'} Details </Text>
     </View>
     <View style={styles.viewstyle}>
      <View style={styles.inputstyle}>
        <FocusedTextInput placeholder="Email" autoCapitalize={false} keyboardType="email-address" />
        </View>
        <View style={styles.inputstyle}>
        <FocusedTextInput placeholder="Password" secureTextEntry={false}/>
        </View>
        <View style={styles.inputstyle}>
        <FocusedTextInput  placeholder="Retype Password" secureTextEntry={false}/>
       </View>
     </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => this.cancel()}>
            <Text style={styles.ButtonText2}> Back </Text>
          </TouchableOpacity>

            <LinearGradient
              colors={['rgb(65,216,221)', 'rgb(85,131,238)']}
              style={styles.Button1}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}>
              <Text style={styles.ButtonText1} onPress={() => this.submit()}>
                Submit
              </Text>
            </LinearGradient>

        </View>
      </View>
    );
  }
}
export default Inputs3;