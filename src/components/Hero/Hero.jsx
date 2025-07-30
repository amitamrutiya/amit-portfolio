import styles from "./Hero.module.css";
import animationData from '../../../assets/hero/heroimage.json';
import Lottie from "lottie-react";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amit</h1>
        <p className={styles.description}>
          Full-stack developer with 5,000+ open-source contributions (CNCF, GSoC, Layer5) and 1,000+ DSA problems solved, building scalable web & mobile apps using React, Node.js, and Flutter.
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
