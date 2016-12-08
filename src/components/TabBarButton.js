import React, {PropTypes} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,

} from 'react-native';

import * as NavigationState from '../modules/navigation/NavigationState';

const icons = {HOME: require('../../images/homeiso_transparent.png'),
              TIIMI: require('../../images/ryhmaiso_transparent.png'),
              RASTIT: require('../../images/karttaiso_transparent.png'),
              LINKIT: require('../../images/muutiso_transparent.png')};

export default React.createClass({
  displayName: 'TabBarButton',
  propTypes: {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
  },

//<Image source={this.props.icon} />



  render() {
    return (
    <View>
          <TouchableOpacity
            onPress={this.props.action}
            style={[styles.button, this.props.isSelected && styles.selected]}>
            <Image source={icons[this.props.text]} style={styles.buttonImage} />
          </TouchableOpacity>
    </View>

    );
  }
});

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: 'lightpink'
  },
  buttonImage: {
    height: 55,
    width: 55
  },

});
