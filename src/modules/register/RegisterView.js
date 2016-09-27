import React, {PropTypes} from 'react';
import{
  AppRegistry,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';

const RegisterView = React.createClass({
  PropTypes: {
    dispatch: PropTypes.func.isRequired
  },
  popRoute(){
  this.props.dispatch(NavigationState.popRoute({
        key: 'CounterView',
       }));
    },

  getInitialState(){
    return{
      background: `#ed746a`
    };
  },

  render() {
    const text = `Rekisteröi`;

    return(
      <View style={[styles.RegisterContainer, {backgroundColor: this.state.background}]}>

      <Image
        style={[styles.RegisterImage]}
        source={require('../../../images/superda.png')}
      />

        <TextInput
          style={[styles.RegisterInput]}
          placeholder="Email"
          placeholderTextColor="#000000"
          value={this.state.username}
        />
        <TextInput
          secureTextEntry={true}
          style={[styles.RegisterInput]}
          placeholder="Password"
          placeholderTextColor="#000000"
          value={this.state.password}
        />
        <TouchableOpacity onPress={this.popRoute}>
        <Text style={styles.RegisterButton}>
          {'Rekisteröidy'}
        </Text>
        </TouchableOpacity>

      </View>
    );
  }
});

const styles = StyleSheet.create({

  RegisterContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },

RegisterButton: {
  fontSize:36,
  textAlign: 'center',
  color: 'blue',
  marginBottom: 2,
  padding: 3,
  borderWidth: 1,
  borderRadius: 30,
  backgroundColor:'#e64e24',
  },

RegisterInput:{
  color: 'white',
  fontSize: 20,
  textAlign: 'center',
  width: 300,
},
RegisterImage:{
  backgroundColor: 'blue',
  opacity: 10,
  borderRadius: 250,
  flex:20,
  resizeMode: 'contain',
  borderColor: 'white',

},
});
export default RegisterView;
