import AnimatedLottieView from 'lottie-react-native';
import React from 'react';

const Loading = () => {
  return (
    <AnimatedLottieView
      source={require('../assets/loading-animation.json')}
      autoPlay
    />
  );
};

export default Loading;
