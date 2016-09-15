/*eslint-disable react/prop-types*/

import React from 'react';
import CounterViewContainer from './counter/CounterViewContainer';
import ColorViewContainer from './colors/ColorViewContainer';
import ExampleViewContainer from './exampleView/ExampleViewContainer';
import MakeViewContainer from './MakeView/MakeViewContainer';
import RegisterViewContainer from './RegisterView/RegisterViewContainer';

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

   if (key === 'MakeView') {
      return <MakeViewContainer />;
    }

  if (key === 'RegisterView') {
    return <RegisterViewContainer />;
  }

  throw new Error('Unknown navigation key: ' + key);
}
