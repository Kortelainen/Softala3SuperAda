import React, {PropTypes} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';

const LoginView = React.createClass({


    _userLogin() {
      this.props.dispatch(NavigationState.switchTab(2));
      /*
      fetch('http://localhost:3000/teams/authenticate', {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.teamname,
        })
      })
      .then((response) => response.json())
      .then(response => {
      if (response.success==true) {
        this.setState({teamfound:response.success, token:response.token})
        this.validate()
      } else {
        Alert.alert(
          'Tiimiä ei löytynyt',
          'Tarkista tiimin nimi ja internet yhteys',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
        )
      }
      })

*/
  },
  validate(){
    if (this.state.teamfound==true) {
      console.log(this.state.teamfound)
      this.props.dispatch(NavigationState.pushRoute({
        key: 'TeamView',
        title: 'Team'
      }));
      }
  },

  popRoute(){
  this.props.dispatch(NavigationState.popRoute({
        key: 'CounterView',
       }));
     },


  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      username: '',
      teamid: '',
      teamfound: 'false',
      token:'',
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
          <View style={styles.inputs}>
            <View style={styles.inputContainer}>
               <Text style={styles.textstyle}>Joukkueen nimi:</Text>
            <TextInput
                    style={[styles.input, styles.whiteFont]}
                    onChangeText={(teamname) => this.setState({teamname})}
                    value={this.state.teamname}
                    />
            </View>
          </View>
          <TouchableOpacity onPress={this._userLogin}>
            <View style={styles.signin}>
              <Text style={styles.whiteFont}>KIRJAUDU SISÄÄN</Text>
            </View>
          </TouchableOpacity>

          {/*<Text style={styles.debug}>TeamID: {this.state.teamid}</Text>
          <Text style={styles.debug}>Team Name: {this.state.teamname}</Text>*/}
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
      signin: {
          backgroundColor: '#ff5454',
          padding: 20,
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 90,
          alignItems: 'center'
      },

    inputs: {
        marginTop: 2,
        marginBottom: 2,
          flex: .25
      },
      inputContainer: {
          padding: 35,
          borderWidth: 1,
          borderColor: 'transparent'
      },
      input: {
          position: 'absolute',
          left: 30,
          top: 60,
          right: 30,
          height: 45,
          fontSize: 20
      },

    whiteFont: {
      fontSize: 18,
      color: '#FFF'
  },

    textstyle: {
      color: '#FFF',
      fontSize: 20

  },
    debug: {
      color: '#FFF',
      marginBottom: 15,
      marginLeft: 20
  }
});
export default LoginView;
