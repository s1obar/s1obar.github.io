import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"


function Hero() {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Slobodan</h1>
        <p className={styles.description}>Passionate and results-driven software engineer with a proven track record of 8 years in
the industry. 
            Reach out if you would like to hear more!
        </p>
        <a href="mailto:myemail@mail.com" className={styles.contactBtn}>Contact me</a>
    </div>
    <img src={getImageUrl("hero/Barisic.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
}

export default Hero