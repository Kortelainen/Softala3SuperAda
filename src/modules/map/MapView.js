import React, {PropTypes, Dimensions, Component} from 'react';

import PhotoView from 'react-native-photo-view';

import{
  Image,
  Text,
  View,
  StyleSheet,
  AppRegistry,
  ScrollView,
  TouchableOpacity,
  zoomEnabled,
  maximumZoomScale,
  minimumZoomScale,

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
      background: 'rgba(255,0,54,1)'
    };
  },

  render(){
    const text = 'kartta';

    return(
      <View style={styles.MapContainer}>

      <PhotoView
        minimumZoomScale={1}
        maximumZoomScale={3}
        androidScaleType="fitCenter"
        source={require('../../../images/map.png')}
        style={styles.MapImage}
      />

      </View>
    );
  }
});

const styles = StyleSheet.create({

  MapContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,0,54,1)',
    //alignItems: 'stretch',
  },

  MapImage: {
    flex: 1,
    height: 300,
    width: null,
    backgroundColor: 'rgba(255,0,54,1)',
  },

});
export default MapView;
