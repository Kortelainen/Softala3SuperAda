import React, {PropTypes} from 'react';

import{
  Image,
  Text,
  View,
  StyleSheet,
}from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';

const MapView = React.createClass({
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
      background: '#ed746a'
    };
  },

  render(){
    const text = 'kartta';

    return(
      <View style={[styles.MapContainer]}>

      <Image
        style={[styles.MapImage]}
        source={require('../../../images/HHkartta.png')}
      />

      </View>
    );
  }
});

const styles = StyleSheet.create({

  MapContainer: {

  },

  MapImage: {


  },

});
export default MapView;
