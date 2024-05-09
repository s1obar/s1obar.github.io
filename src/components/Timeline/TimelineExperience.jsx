import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import styles from "./TimelineExperience.module.css"

function TimelineExperience() {
    return (
      <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                    <Timeline position="alternate" className={styles.aboutItems}>
                <TimelineItem className={styles.aboutItemToLeft}>
                  <TimelineOppositeContent className={styles.aboutItemText}>
                    Jan 2024 - present
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h3>Senior Software Engineer</h3>
                    <p>During this period additional knowledges were acquired. Main experience comes from
        managing a lot of applications through whole lifecycle, from planning, development and
        testing to deployment and monitoring.
        </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className={styles.aboutItemToRight}>
                  <TimelineOppositeContent className={styles.aboutItemText}>
                    Jun 2017 - Dec 2024
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                  <h3>Software Engineer</h3>
                    <p>During this period additional knowledges were acquired. Main experience comes from
        managing a lot of applications through whole lifecycle, from planning, development and
        testing to deployment and monitoring.
        </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className={styles.aboutItemToLeft}>
                  <TimelineOppositeContent className={styles.aboutItemText}>
                  Apr 2017 - May 2017
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className={styles.aboutItemText}><h3>Junior Software Engineer</h3>
                    <p>During this period additional knowledges were acquired. Main experience comes from
        managing a lot of applications through whole lifecycle, from planning, development and
        testing to deployment and monitoring.
        </p></TimelineContent>
                </TimelineItem>
                <TimelineItem className={styles.aboutItemToRight}>
                  <TimelineOppositeContent className={styles.aboutItemText}>
                    Oct 2015 - Mar 2017
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                  <h3>Junior Devops Engineer</h3>
                    <p>During this period additional knowledges were acquired. Main experience comes from
        managing a lot of applications through whole lifecycle, from planning, development and
        testing to deployment and monitoring.
        </p>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
      </section>
    );
}

export default TimelineExperience