import React, {PropTypes} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  View
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

    <View>
          <TouchableOpacity
            onPress={this.props.action}
            style={[styles.button, this.props.isSelected && styles.selected]}>

            <Text>{this.props.text}</Text>

            {/* <Image source={require('../../images/pepperoni.png')}/> */}

          </TouchableOpacity>
    </View>

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
