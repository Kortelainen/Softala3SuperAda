import React, {PropTypes} from 'react';
import {
Text,
View,
StyleSheet,
ListView,
TouchableOpacity
} from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';
import companies from './CompanyList.json';

const CheckPointView = React.createClass({

  propTypes: {
    dispatch: PropTypes.func.isRequired
  },
  kartta(){
  this.props.dispatch(NavigationState.pushRoute({
      key: 'MapView',
      title: 'Kartta'
    }));
  },
  render(){
    const text = 'Tervetuloa yrityslista sivulle';
    return (
      <View style={[styles.container]}>
      <Text>
        {text}
      </Text>
      <TouchableOpacity onPress={this.kartta}>
      <Text style={styles.GoToMapButton}>
        {'NÄYTÄ RASTIT KARTALLA'}
      </Text>
      </TouchableOpacity>
    </View>
    );
  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  GoToMapButton: {
    flex:2,
    fontSize:22,
    textAlign: 'center',
    color: 'white',
    marginBottom: 2,
    padding: 3,
    backgroundColor:'#e64e24'
    },
});

export default CheckPointView;
