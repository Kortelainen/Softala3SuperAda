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
      background: '#FFFFFF'
    };
  },

  render(){
    const text = 'kartta';

    return(
      <ScrollView
      zoomEnabled={true}
      maximumZoomScale={3}
      minimumZoomScale={1}
      >




      <View style={styles.MapContainer}>

<TouchableOpacity onPress={this._onPressButton}>
      <Image
        style={styles.MapImage}
        source={require('../../../images/kartta.png')}


      ></Image>
      </TouchableOpacity>

      </View>
      </ScrollView>
    );
  }
});

const styles = StyleSheet.create({

  MapContainer: {
    flex: 0,
     justifyContent: 'center',
     backgroundColor: '#ffffff',
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
