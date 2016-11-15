import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import * as NavigationState from '../../modules/navigation/NavigationState';

const Goodbye = React.createClass({
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
        <View style={styles.textContainer}>
          <Text style={styles.textBody}>Kiitos osallistumisestasi!</Text>
          <Text style={styles.textBody}>Tervetuloa ensi vuonna uudestaan!</Text>
        </View>
        <View style={styles.regardsContainer}>
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
  textContainer: {
    padding: 35,
    alignItems: 'center'
  },
  textBody: {
    color: '#FFF',
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
  regardsContainer: {
    alignItems: 'center'
  },
  bottomText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  }
});
export default Goodbye;
