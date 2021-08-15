import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../Lottie/blockchainAnimation2.json';
import '../App.css';
class BottomPage extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div className="headLottie">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    );
  }
}

export default BottomPage;