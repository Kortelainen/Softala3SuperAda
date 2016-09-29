import React, {PropTypes} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,

} from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';
import {post} from '../../utils/api';
import {setAuthenticationToken} from '../../utils/authentication';

const LoginView = React.createClass({


    _userLogin() {
      fetch('http://localhost:3000/teams/authenticate', {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.username,
        })
      })
      .then((response) => response.json())
      .then(response => {
      console.log(response)
      this.setState({teamid:response.teamID, teamname:response.teamname})
    })
  },

  popRoute(){
  this.props.dispatch(NavigationState.popRoute({
        key: 'CounterView',
       }));
    },


  verifyTeam() {
console.log('IM IN');
fetch('/teams/authenticate', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    first: 'firsValue',
    second: 'secondValue',
  })
})
  .then(function(json) {
    console.log('hallelujah', json)
  })
  .catch(error => {
      console.log('error ' + error);
      this.setState({message: 'Virhe sisäänkirjautumisessa, tarkista salasana ja Internetyhteys'});
    });



  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {

      teamname: '',
      message: '',
//      password: '',

      username: '',
      teamid: '',
      teamname: '',
      background: `rgba(250,155,145,1)`
    }
  },

  render: function() {




    return (



      <View style={[styles.container, {backgroundColor: this.state.background}]}>
          <View style={styles.header}>
              <Image style={styles.mark} source={require('../../../images/superada_transparent.png')}/>
          </View>

        <View style={styles.textBox}>
          <Text style={styles.textstyle}>
            Anna joukkueesi nimi:
          </Text>
        </View>

        <View style={{padding: 10}}>
          <TextInput
              style={{height: 40}}
              placeholder="esim. TeamGreatest"
              onChangeText={(teamname) => this.setState({teamname})}
              value={this.state.teamname}/>
        </View>

          <View style={styles.loginButton}>
          <TouchableOpacity onPress={this.verifyTeam}>
          <View style={styles.inputs}>
            <View style={styles.inputContainer}>
               <Text style={styles.textstyle}>Joukkueen nimi:</Text>
            <TextInput
                    style={[styles.input, styles.whiteFont]}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    />
            </View>
          </View>

          <View style={styles.signin}>
          <TouchableOpacity onPress={this._userLogin}>
              <Text style={styles.whiteFont}>KIRJAUDU SISÄÄN</Text>
              </TouchableOpacity>
          </View>
          <Text style={styles.debug}>TeamID: {this.state.teamid}</Text>
          <Text style={styles.debug}>Team Name: {this.state.teamname}</Text>
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
  mark: {
      width: 150,
      height: 150
  },
  textBox: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      padding: 30
  },
  inputField: {
      width: 300,
      height: 150,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 30,
      backgroundColor: 'gray'
  },
  loginButton: {
      backgroundColor: '#ff5454',
      padding: 20,
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 30,
      alignItems: 'center'
  },
  inputText: {
      fontSize: 20
  },
  whiteFont: {
      color: '#FFF'
  },
  textstyle: {
      color: '#FFF',
      fontSize: 20
  }
});

export default LoginView;
