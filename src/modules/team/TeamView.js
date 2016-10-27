import React, {PropTypes, Component} from 'react';

import{
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage
}from 'react-native';

var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');
var options = require('./image-picker-options');

import * as NavigationState from '../../modules/navigation/NavigationState';

const TeamView = React.createClass({
  PropTypes: {
    dispatch: PropTypes.func.isRequired
  },

  async yrityslista(){
      try {
        const teamtoken = await AsyncStorage.getItem('token');
        const teamname = await AsyncStorage.getItem('teamname');
        if (teamtoken !== null) {
          fetch('http://localhost:3000/teams', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + teamtoken,
            },
            body: JSON.stringify({
              name: teamname,
            })
          })
          this.props.dispatch(NavigationState.switchTab(1));
        }
      } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
      }
  },

  popRoute(){
    this.props.dispatch(NavigationState.popRoute({
      key:'CounterView',
    }));
  },

  getInitialState(){
    return{
      background: `rgba(250,155,145, 1)`
    };
  },

openImageGallery(){
  ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    // You can display the image using either data...
    const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

    // or a reference to the platform specific asset location
    if (Platform.OS === 'ios') {
      const source = {uri: response.uri.replace('file://', ''), isStatic: true};
    } else {
      const source = {uri: response.uri, isStatic: true};
    }

    this.setState({
      avatarSource: source
    });
  }
});
},

  render(){
        return (
          <View style={styles.TeamContainer}>
              <Text style={styles.whiteFont}>Joukkueen nimi:</Text>
              <TextInput
                  style={[styles.TeamInput, styles.whiteFont]}
              />

              <TouchableOpacity
                onPress={this.openImageGallery}
                style={[styles.cameraButton]}>

                  <Image style={styles.cameraImage} source={require('../../../images/kamera.png')}/>
                  <Image source={this.state.avatarSource} style={styles.teamImage} />

              </TouchableOpacity>


              <Text style={styles.whiteFont}>Slogan:</Text>
              <TextInput
                      style={[styles.TeamInput, styles.whiteFont]}
                      />

              <TouchableOpacity onPress={this.yrityslista} accessible={true} style={styles.saveButton}>
                  <Text style={styles.whiteFont}>{'TALLENNA'}</Text>
              </TouchableOpacity>
          </View>

        );
      }
  });

  const circle = {
    borderWidth: 0,
    borderRadius: 75,
    width: 150,
    height: 150,
  };

const styles = StyleSheet.create({

  TeamContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `rgba(250,155,145, 1)`,
  },

  TeamInput: {
    width: 300,
  },

  TeamImage: {


  },

  cameraButton: {
      ...circle,
      backgroundColor: '#FFF',
      margin: 20
  },

  cameraImage: {
    width:100,
    height:100,
    position:'absolute',
    alignItems: 'center',
    margin: 25
  },

  teamImage: {
    width:150,
    height:150,
    position:'absolute',
    alignItems: 'center',
    borderRadius: 75,
  },

  saveButton: {
      backgroundColor: '#ff5454',
      padding: 20,
      marginLeft: 30,
      marginRight: 30,
      marginTop:45,
      marginBottom: 130,
      alignItems: 'center',
      width:350,

  },
  whiteFont: {
    color: '#FFF',
    fontSize: 18,

  },



});
export default TeamView;
