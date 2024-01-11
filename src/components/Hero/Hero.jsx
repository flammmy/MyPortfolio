import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import AnimationData from "../../../assets/Animation.json";
import Lottie from "lottie-react";
import github from "../../../assets/hero/github.svg";
import linkedin from "../../../assets/hero/linkedin.svg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <span>Abhishek</span>
        </h1>
        <p className={styles.description}>
          A crazy full stack developer who is excited about new techs and wants
          to learn them.
        </p>
        <a href="mailto:abhishp23@email.com" className={styles.contactBtn}>
          Contact Me
        </a>

      </div>
      <div className={styles.img}>
        <Lottie animationData={AnimationData} />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
