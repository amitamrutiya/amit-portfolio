import Lottie from "lottie-react";
import animationData from '../../../assets/about/aboutImage.json';
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <Lottie className={styles.aboutImage} animationData={animationData} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div >
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div >
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/androidIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>App Devloper</h3>
              <p>
                I have created multiple apps for both Android and iOS, with an integrated backend{" "}
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
