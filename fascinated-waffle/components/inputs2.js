import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Input, Button, Item } from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native';
import MyText from 'react-native-letter-spacing';
import styles from '../style/formStyle';
import FocusedTextInput from './focusedTextInput';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
class Inputs2 extends React.Component {
  render() {
    return (
      <View >
        <View style={styles.step}>
        <Text style={styles.steptext}> STEP 2/3 </Text>
        </View>
        <View style={styles.heading}>
        <Text style={styles.textheading}> Dentist {'\n'} Details </Text>
        </View>

        <View style={styles.togglebutton}>
          <View style={styles.toggleview}>
            <Text style={styles.toggletext}>Do you wearing braces?</Text>
          </View>
          <View style={styles.toggleview}>
            <ToggleSwitch isOn={true} onColor="rgb(85,131,238)" size="small" />
          </View>
        </View>

         <View style={styles.viewstyle}>
        <View style={styles.inputstyle}>
        <FocusedTextInput placeholder="Doctor Name" />
        </View>
        <View style={styles.inputstyle}>
        <FocusedTextInput placeholder="Doctor Location" />
        </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.Button2}
            >
            <Text style={styles.ButtonText2}> Cancel</Text>
          </TouchableOpacity>

          <LinearGradient
          style={styles.Button1}
            colors={['rgb(65,216,221)', 'rgb(85,131,238)']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}>
            <Text style={styles.ButtonText1} onClick={() => this.inputslogin}>
              Submit
            </Text>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

export default Inputs2;
