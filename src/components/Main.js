import React from "react";
import { Animated } from "react-animated-css";
import styles from "./Main.module.css";
import logo from "../gaga.png";

export default function Main() {
  return (
    <div className={styles.container}>
      {/* Title and brand */}
      <aside className={styles.aside}>
        <h1>
          Johnny Xu <br /> Creative Designer / Developer
        </h1>
        <a href="http://gaga-graphics.com" target="_blank" rel="noreferrer">
          <img src={logo} alt="Johnny's brand logo" title="GAGA GRAPHICS" />
        </a>
      </aside>

      {/* Bio content */}
      <main className={styles.main}>
        <Animated
          animationIn="fadeIn"
          animationInDelay={1000}
          animationInDuration={2000}
          isVisible={true}
          className={styles.contentWrapper}
        >
          <h2>About Me</h2>
          <h3>Overview</h3>
          <p>
            Creative Designer/Developer with more than 17 years of experience
            from digital agency, in-house and corporate environments in both
            Australia and China.
          </p>
          <p>
            Talented and passionate about UI/UX engineering and new technologies
            in digital.
          </p>
          <p>
            An organized perfectionist with great work ethic. Sharp attention to
            details and ambitions to create world-class works. Highly interested
            in working on UI/UX engineering, responsive web design and
            mobile/web applications with edge technologies.
          </p>
          <h3>Contact</h3>
          <ul className={styles.contact}>
            <li>
              <b>Website:</b>{" "}
              <a
                href="http://www.gaga-graphics.com"
                target="_blank"
                rel="noreferrer"
              >
                http://www.gaga-graphics.com
              </a>
            </li>
            <li>
              <b>LinkedIn:</b>{" "}
              <a
                href="http://www.linkedin.com/in/johnnyxu"
                target="_blank"
                rel="noreferrer"
              >
                http://www.linkedin.com/in/johnnyxu
              </a>
            </li>
          </ul>
        </Animated>
      </main>
    </div>
  );
}
