import styles from "./ExperienceDetail.module.css";

function ExperienceDetail() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Google Summer of Code - 2023</h1>
                <a
                    href="https://summerofcode.withgoogle.com/programs/2023/projects/iblkHo3k"
                    target="_blank"
                >
                    <button className={styles.certificateButton}>Certificate</button>
                </a>
            </div>
            <ul className={styles.description}>
                <li>
                    <p>
                        During this remote work journey, I had the opportunity to contribute to a
                        significant project -{" "}
                        <a href="https://github.com/amitamrutiya2210/Flood_Mobile" className={styles.link}>
                            Flood Mobile
                        </a> at <a href="https://ccextractor.org/" className={styles.link}>CCExtractor Organization</a>
                        . 🤖
                    </p>
                </li>
                <li>
                    <p>
                        For more details about my organization or project, visit the{" "}
                        <a href="https://summerofcode.withgoogle.com/programs/2023/organizations/ccextractor-development" className={styles.link}>
                            Google Summer of Code
                        </a>{" "}
                        website.
                    </p>
                </li>
                <li>
                    <p>
                        I've also published three{" "}
                        <a href="https://medium.com/@amitamrutiya2210" className={styles.link}>blogs</a> summarizing
                        my GSOC journey.
                    </p>
                </li>
                <li>
                    <p>
                        My contributions included over{" "}
                        <a href="https://github.com/CCExtractor/Flood_Mobile/commits?author=amitamrutiya2210" className={styles.link}>
                            100+ commits {" "}
                        </a>
                        and more than 40k+ lines of code changes in flood mobile app. I added nearly 15+
                        new features and addressed some existing bugs.
                    </p>
                </li>
            </ul>
            <hr />
            <br />
            <div className={styles.title}>
                <h1>Prelax Infotech</h1>
                <a
                    href="https://drive.google.com/file/d/17bNi84LrxCNu1Dc1Y7Sq4VcRJ0YRaJ8i/view?usp=sharing"
                    target="_blank"
                >
                    <button className={styles.certificateButton}>Certificate</button>
                </a>
            </div>
            <ul className={styles.description}>
                <li>
                    <p>
                        <a href="https://prelax.in/" className={styles.link}>Prelax Infotech</a>, an ISO-9001 certified company renowned for its cutting-edge software solutions, was firmly established back in 2013.
                    </p>
                </li>
                <li>
                    <p>
                        In my first internship, I had the enriching opportunity to learn and master two new app development technologies, namely Flutter and Dart.
                    </p>
                </li>
                <li>
                    <p>
                        Over the span of two months, I was actively involved in a company's Flutter project, contributing significantly to its development.
                    </p>
                </li>

            </ul>
        </div>
    );
}

export default ExperienceDetail;
