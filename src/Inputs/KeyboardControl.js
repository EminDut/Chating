import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

function KeyboardControl ( { children } ) {
  const keyboard = () => {
    Keyboard.dismiss();
  };


return (
  <TouchableWithoutFeedback onPress={keyboard}>

    {children}

  </TouchableWithoutFeedback>
  
);

}

export default KeyboardControl;
