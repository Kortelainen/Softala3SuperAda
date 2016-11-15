import React, {PropTypes} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {options} from './image-picker-options';

import * as NavigationState from '../../modules/navigation/NavigationState';

const TeamView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      background: 'rgb(255,255,255)',
      teamDescription: ''
    };
  },

  yrityslista() {
    this.props.dispatch(NavigationState.switchTab(1));
  },

  openImageGallery() {
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

  render() {
    return (
      <View style={[styles.teamContainer, {backgroundColor: this.state.background}]}>
        <View style={styles.teamName}>
          <Text style={styles.teamTitle}> Minun tiimini </Text>
              <Text>
              {/*tähän haetaan kirjautuneen tiimin nimi (not editable)*/}
              </Text>
        </View>
          <TouchableOpacity
            onPress={this.openImageGallery}
            style={[styles.cameraButton]}>
            <Image style={styles.cameraImage} source={require('../../../images/kamera.png')}/>
            <Image source={this.state.avatarSource} style={styles.teamImage} />
          </TouchableOpacity>
          <Text style={styles.descriptionText}>Slogan:</Text>
            <View style={styles.description}>
              <TextInput
                style={styles.teamInput}
                onChangeText={(teamDescription) => this.setState({teamDescription})}
                value={this.state.teamDescription}
                />
            </View>
          <View style={styles.submitButton}>
            <TouchableOpacity onPress={this.yrityslista} accessible={true} style={styles.saveButton}>
                <Text style={[styles.whiteFont, {fontWeight: 'bold'}]}>{'TALLENNA'}</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
});

const circle = {
  borderWidth: 0,
  borderRadius: 75,
  width: 150,
  height: 150
};

const styles = StyleSheet.create({
  teamContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  teamName: {
    marginTop: 100
  },
  teamTitle: {
    color: '#FF0036',
    fontSize: 30,
    fontWeight: 'bold'
  },
  description: {
    margin: 20
  },
  descriptionText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  teamInput: {
    width: 300,
    marginBottom: 30,
    color: 'black',
    ...Platform.select({
      ios: {
        height: 70,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 20
      }
    })
  },
  cameraButton: {
    ...circle,
    backgroundColor: '#EEEEEE',
    margin: 20
  },
  cameraImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    alignItems: 'center',
    margin: 25
  },
  teamImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 75
  },
  submitButton: {
    backgroundColor: '#ff5454',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 70,
    marginBottom: 100,
    marginTop: 20
  },
  whiteFont: {
    color: '#FFF',
    fontSize: 18
  }
});
export default TeamView;
