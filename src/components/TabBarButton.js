import React, {PropTypes} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import * as NavigationState from '../modules/navigation/NavigationState';

export default React.createClass({
  displayName: 'TabBarButton',
  propTypes: {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
  },
  render() {
    return (

      <TouchableOpacity
        onPress={this.props.action}
        style={[styles.button, this.props.isSelected && styles.selected]}>

        <Image source={require('../../images/pepperoni.png')}/>



      </TouchableOpacity>
    );
  }
});

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: {
    backgroundColor: 'lightpink'
  }
});
