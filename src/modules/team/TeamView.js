import React, {PropTypes, Component} from 'react';

import{
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
}from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';

const TeamView = React.createClass({
  PropTypes: {
    dispatch: PropTypes.func.isRequired
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

  render(){
        return (

          <View style={styles.TeamContainer}>
              <Text style={styles.whiteFont}>Joukkueen nimi:</Text>
              <TextInput
                      style={[styles.TeamInput, styles.whiteFont]}
                      />

              <TouchableOpacity
                style={[styles.cameraButton]}>
                <Text style={styles.camera}>
                  <Image style={styles.cameraImage} source={require('../../../images/kamera.png')}/>
                </Text>
              </TouchableOpacity>



              <Text style={styles.whiteFont}>Slogan:</Text>
              <TextInput
                      style={[styles.TeamInput, styles.whiteFont]}
                      />

              <TouchableOpacity style={styles.saveButton}>
                  <Text style={styles.whiteFont}>TALLENNA</Text>
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


  camera: {
      color: 'red',
      fontSize: 20,
      textAlign: 'center'
    },

  cameraButton: {
      ...circle,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20
  },

  cameraImage: {
    width:100,
    height:100,
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
