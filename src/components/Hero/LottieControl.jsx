import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../assets/hero/heroimage.json';
import styles from "./Hero.module.css";

export default class LottieControl extends React.Component {
  render(){
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie  className={styles.heroImg} options={defaultOptions}
              height={400}
              width={400}
        />
      </div>
    )
  }
}