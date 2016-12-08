import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppViewContainer from './src/modules/AppViewContainer';
import SplashScreen from 'react-native-smart-splash-screen'

import React from 'react';
import {AppRegistry} from 'react-native';

const Softala3SuperAda = React.createClass({

  componentDidMount () {
    SplashScreen.close(SplashScreen.animationType.scale, 800, 500)
  },

  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
});

AppRegistry.registerComponent('Softala3SuperAda', () => Softala3SuperAda);
