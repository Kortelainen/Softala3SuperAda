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

const GoodbyeFeedbackView = React.createClass({

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
               <Text style={styles.textstyle}>Kiitos palautteestasi!</Text>
               <Text style={styles.textstyle}>Tervetuloa ensi vuonna uudestaan!</Text>

            </View>
            <View style={styles.inputContainer}>
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
          flex: 0,
          backgroundColor: 'transparent'
      },
      mark: {
          width: 200,
          height: 250
      },


      textstyle: {
        color: '#FFF',
        marginBottom: 15,
        fontSize: 20,
        textAlign: 'center'
      },
      bottomText: {
        color: '#FFF',
        marginTop: 150,
        fontSize: 20,
        textAlign: 'center'

      }
});
export default GoodbyeFeedbackView;
