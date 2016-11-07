import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';

const Welcome = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      username: '',
      password: '',
      background: 'rgba(255,0,54,1)'
    };
  },

  login() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'LoginView',
      title: 'Login'
    }));
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.background}]}>
        <View style={styles.header}>
          <Text style={styles.titleText}>
              Tervetuloa!
          </Text>
          <Image style={styles.mark} source={require('../../../images/tervetuloa.png')}/>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textField}>
            <Text style={styles.textstyle}>
              Kahdeksan rastia odottavat sinua!
              Jokaisella rastilla suoritetaan tehtävä.
              Rasteja pitävät yritykset ja oppilaitokset
              kirjaavat rastisuoritukset puolestanne
            </Text>
          </View>
          <View style={styles.textField}>
            <Text style={styles.textstyle}>
              Kannattaa pelata läpi myös Super-Ada Quiz.
              Tasapistetilanteessa hyvin suoritettu Quiz ratkaisee voiton.
            </Text>
          </View>
          <View style={styles.textField}>
             <Text style={styles.boldText}>ONNEA MATKAAN!</Text>
          </View>
        </View>
        <TouchableOpacity onPress={this.login}>
          <View style={styles.button}>
              <Text style={styles.whiteFont}>MUOKKAA TIIMIÄ</Text>
          </View>
        </TouchableOpacity>
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
    flex: 0,
    backgroundColor: 'transparent'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'
  },
  mark: {
    width: 250,
    height: 200
  },
  button: {
    backgroundColor: '#FF8A8C',
    padding: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    alignItems: 'center'
  },
  textContainer: {
    marginTop: 2,
    marginBottom: 2,
    flex: .25
  },
  textField: {
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  whiteFont: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textstyle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  boldText: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default Welcome;
