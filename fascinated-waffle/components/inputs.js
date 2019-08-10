import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Icon,
  Picker,
  KeyboardAvoidingView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MyText from 'react-native-letter-spacing';
import styles from '../style/formStyle';
import FocusedTextInput from './focusedTextInput';
import {StackNavigator} from 'react-navigation';
import Inputs2 from './inputs2.js'


class Inputs extends Component {
  state = {
    states: ['', 'DL', 'KA', 'PN', 'MP'],
  };
inputslogin = () => {
        fetch('./inputs2',{
            
        }).done();
        alert('atta');
    }
  render() {
    return (
      <KeyboardAvoidingView>
        <View style={styles.step}>
        <Text style={styles.steptext}> STEP 1/3 </Text>
        </View>
        <View style={styles.heading}>
        <Text style={styles.textheading}> Personal {'\n'} Details </Text>
        </View>
        
        <View style={styles.viewstyle}>
        <View style={styles.inputstyle}>
        <FocusedTextInput placeholder="First Name" />
        </View>
        <View style={styles.inputstyle}>
        <FocusedTextInput placeholder="Last Name" />
        </View>
        <View style={styles.inputstyle}>
        <FocusedTextInput placeholder="City" />
        </View>
        </View>
<View style={styles.shape}>
        <Picker
          width="100%"
          selectedValue={this.state.states}
          iosIcon={<Icon name="arrow-down" />}
          placeholderIconColor="#007aff"
          color='rgb(200,200,200)'
          fontSize="17"
          onValueChange={(itmVal, itmIndex) =>
            this.setState({ states: itmVal })
          }>
          <Picker.Item color='rgb(200,200,200)' label="State" value="State"/>
          <Picker.Item color='rgb(54,54,54)' label="Delhi" value="DL" />
          <Picker.Item color='rgb(54,54,54)' label="Karnataka" value="KA" />
          <Picker.Item color='rgb(54,54,54)' label="Punjab" value="PN" />
          <Picker.Item color='rgb(54,54,54)' label="Madhya Pradesh" value="MP" />
        </Picker>
        </View>
        <View style={styles.viewstyle}>
        <View style={styles.inputstyle}>
        <FocusedTextInput placeholder="Zip Code" />
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
      <View style={{ height: 60 }}></View>

  </KeyboardAvoidingView>
    );
  }
}
export default Inputs;
