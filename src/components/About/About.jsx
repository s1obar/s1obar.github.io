import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

function About() {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting at the laptop" className={styles.aboutImage}></img>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor ison"></img>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Engineer</h3>
                    <p>Backend engineer with experience in a lot of different backend solutions</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Cursor ison"></img>
                <div className={styles.aboutItemText}>
                    <h3>Backend Engineer</h3>
                    <p>Backend engineer with experience in a lot of different backend solutions</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Cursor ison"></img>
                <div className={styles.aboutItemText}>
                    <h3>Ui Designer</h3>
                    <p>Backend engineer with experience in a lot of different backend solutions</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}

export default About