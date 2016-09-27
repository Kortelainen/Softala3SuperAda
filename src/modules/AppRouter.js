/*eslint-disable react/prop-types*/

import React from 'react';
import CounterViewContainer from './counter/CounterViewContainer';
import ColorViewContainer from './colors/ColorViewContainer';
import ExampleViewContainer from './exampleView/ExampleViewContainer';
import LoginViewContainer from './loginView/LoginViewContainer';
import FeedbackViewContainer from './feedbackView/FeedbackViewContainer';
import RegisterViewContainer from './RegisterView/RegisterViewContainer';
import MapViewContainer from './MapView/MapViewContainer';
import TeamViewContainer from './team/TeamViewContainer';
import WelcomeViewContainer from './WelcomeView/WelcomeViewContainer';
import GoodbyeViewContainer from './Goodbye/GoodbyeViewContainer';
import TeamPointsViewContainer from './TeamPointsView/TeamPointsViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'Counter') {
    return <CounterViewContainer />;
  }

  if (key.indexOf('Color') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <ColorViewContainer
        index={index}
      />
    );
  }
  if (key === 'ExampleView') {
     return <ExampleViewContainer />;
   }

   if (key === 'LoginView') {
      return <LoginViewContainer />;
    }

    if (key === 'FeedbackView') {
       return <FeedbackViewContainer />;
     }

   if (key === 'RegisterView') {
      return <RegisterViewContainer />;
    }

    if (key === 'Welcome') {
      return <WelcomeViewContainer />;
    }

  if (key === 'MapView') {
    return <MapViewContainer />;
  }

  if (key === 'TeamView') {
    return <TeamViewContainer />;
  }

  if (key === 'Goodbye') {
    return <GoodbyeViewContainer />;
  }

  if (key === 'TeamPointsView') {
    return <TeamPointsViewContainer />;
  }

  throw new Error('Unknown navigation key: ' + key);
}
