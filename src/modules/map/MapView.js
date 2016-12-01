import React, {PropTypes, Dimensions, Component} from 'react';


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
      <ScrollView
      zoomEnabled={true}
      maximumZoomScale={2}
      minimumZoomScale={1}
      >




      <View style={styles.MapContainer}>

<TouchableOpacity onPress={this._onPressButton}>
      <Image
        style={styles.MapImage}
        source={require('../../../images/map.png')}


      ></Image>
      </TouchableOpacity>

      </View>
      </ScrollView>
    );
  }
});

const styles = StyleSheet.create({

  MapContainer: {
    flex: -1,

     backgroundColor: 'rgba(255,0,54,1)',

     height: null,
     width: null,
     alignItems: 'stretch',





  },

  MapImage: {
    flex: 1,
    height: 550,
    width: undefined,
    backgroundColor: 'rgba(255,0,54,1)',








  },

});
export default MapView;
