import * as CounterState from './CounterState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

const CounterView = React.createClass({
  propTypes: {
    counter: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  welcome(){
  this.props.dispatch(NavigationState.pushRoute({
        key: 'Welcome',
        title: 'Tervetuloa'
      }));
    },
    login(){
    this.props.dispatch(NavigationState.pushRoute({
          key: 'LoginView',
          title: 'Näyttäähä :)'
         }));
      },
      feedback(){
      this.props.dispatch(NavigationState.pushRoute({
            key: 'FeedbackView',
            title: 'Anna palautetta'
           }));
        },
      register(){
      this.props.dispatch(NavigationState.pushRoute({
            key: 'RegisterView',
            title: 'RegisterView'
           }));
        },

      kartta(){
      this.props.dispatch(NavigationState.pushRoute({
          key: 'MapView',
          title: 'Kartta'
        }));
      },

      yrityslista(){
    this.props.dispatch(NavigationState.pushRoute({
      key: 'CheckPoints',
      title: 'Yrityslista'
    }));
  },

      team(){
      this.props.dispatch(NavigationState.pushRoute({
        key: 'TeamView',
        title: 'Team'
      }));
      },

  renderUserInfo() {
    if (!this.props.userName) {
      return null;
    }

    return (
      <View style={styles.userContainer}>
        <Image
          style={styles.userProfilePhoto}
          source={{
            uri: this.props.userProfilePhoto,
            width: 80,
            height: 80
          }}
        />

        <Text style={styles.linkButton}>
          Welcome, {this.props.userName}!
        </Text>
      </View>
    );
  },
  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;

    return (
      <View style={styles.container}>

        {this.renderUserInfo()}



        <TouchableOpacity onPress={this.welcome} accessible={true}>
            <Text style={styles.linkButton}>
              {'Tervetuloa'}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.kartta} accessible={true}>
          <Text style={styles.linkButton}>
            {'Kartta'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.register} accessible={true}>
          <Text style={styles.linkButton}>
            {'Register'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.login} accessible={true}>
            <Text style={styles.linkButton}>
              {'Login view'}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.feedback} accessible={true}>
            <Text style={styles.linkButton}>
              {'FeedbackView'}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.register} accessible={true}>
            <Text style={styles.linkButton}>
              {'Register view'}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.team} accessible={true}>
            <Text style={styles.linkButton}>
              {'Team'}
            </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={this.yrityslista} accessible={true}>
           <Text style={styles.linkButton}>
             {'Yrityslista'}
           </Text>
       </TouchableOpacity>

      </View>
    );
  }
});

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5,
  },
});

export default CounterView;
