import React, {PropTypes, Dimensions, Component} from 'react';


import{
  Image,
  Text,
  View,
  StyleSheet,
  AppRegistry,

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
      <View style={styles.MapContainer}>


      <Image
        style={styles.MapImage}
        source={require('../../../images/kartta.png')}
      />

      </View>
    );
  }
});

const styles = StyleSheet.create({

  MapContainer: {
    flex: 1,
     justifyContent: 'center',
     backgroundColor: '#FFFFFF',
     position: 'relative',
     height: undefined,
     width: undefined,



  },

  MapImage: {
    height: 400,
    width: undefined,








  },

});
export default MapView;
