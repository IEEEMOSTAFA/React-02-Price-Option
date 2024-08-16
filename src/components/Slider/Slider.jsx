import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Import default styles or use scss styles below
// Import the scss styles if you are using scss
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

const Slider = () => {
  const startupScreen = (
    <div>
      <img src="/path/to/image-loader.png" alt="Loading" />
    </div>
  );

  const onFirstMount = () => {
    console.log("Slider has been mounted.");
  };

  const onAnimationStart = ({ element, currentIndex, nextIndex, currentScreen, nextScreen }) => {
    console.log("Animation started:", { currentIndex, nextIndex });
  };

  const onAnimationEnd = ({ element, currentIndex, nextIndex, currentScreen, nextScreen }) => {
    console.log("Animation ended:", { currentIndex, nextIndex });
  };

  return (
    <AwesomeSlider
      startupScreen={startupScreen}
      cssModule={AwsSliderStyles} // Uncomment if using scss
      onFirstMount={onFirstMount}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd}
    >
      <div data-src="/path/to/image-0.png" />
      <div data-src="/path/to/image-1.png" />
      <div data-src="/path/to/image-2.jpg" />
    </AwesomeSlider>
  );
};

export default Slider;
