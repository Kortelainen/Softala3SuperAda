import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';

const GoodbyeFeedbackView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      background: 'rgba(255,0,54,1)'
    };
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.background}]}>
        <View style={styles.header}>
          <Text style={styles.titleText}>
            Kiitos!
          </Text>
          <Image style={styles.mark} source={require('../../../images/kiitos.png')}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textstyle}>Kiitos palautteestasi!</Text>
          <Text style={styles.textstyle}>Tervetuloa ensi vuonna uudestaan!</Text>
        </View>
        <View style={styles.regardContainer}>
          <Text style={styles.bottomText}>t- Super-Ada tiimi</Text>
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'
  },
  mark: {
    width: 200,
    height: 250
  },
  textstyle: {
    color: '#FFF',
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bottomText: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50
  }
});
export default GoodbyeFeedbackView;
