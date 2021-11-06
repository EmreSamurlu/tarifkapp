import AnimatedLottieView from 'lottie-react-native';
import React from 'react';

const Error = () => {
  return (
    <AnimatedLottieView
      source={require('../assets/error-animation.json')}
      autoPlay
    />
  );
};

export default Error;
