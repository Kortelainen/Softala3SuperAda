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

const Goodbye = React.createClass({

  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {

      background: `rgba(250,155,145,1)`
    }
  },

  render: function() {



    return (


      <View style={[styles.container, {backgroundColor: this.state.background}]}>
      <View style={styles.header}>
              <Image style={styles.mark} source={require('../../../images/kiitos.png')}/>
          </View>

            <View style={styles.inputContainer}>
               <Text style={styles.textstyle}>Kiitos osallistumisesta!</Text>

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
          flex: 0,
          backgroundColor: 'transparent'
      },
      mark: {
          width: 200,
          height: 250
      },

      inputContainer: {
          padding: 35,
          borderWidth: 1,
          borderColor: 'transparent'
      },

      textstyle: {
        color: '#FFF',
        marginBottom: 15,
        fontSize: 20
      }
});
export default Goodbye;
