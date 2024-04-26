import styles from "./Hero.module.css";
import animationData from '../../../assets/hero/heroimage.json';
import Lottie from "lottie-react";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amit</h1>
        <p className={styles.description}>
          I am a versatile full-stack developer, specializing in both web and app development. Feel free to connect for more information or collaboration opportunities!
        </p>
        <a href="mailto:amitamrutiya2210@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <Lottie className={styles.heroImage} animationData={animationData} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
