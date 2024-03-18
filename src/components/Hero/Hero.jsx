import styles from "./Hero.module.css";
function Hero() {
  return (
    <div className={`${styles.levelup_hero} ${styles.section_padding}`}>
      <div className={styles.levelup_content}>
        <h1 className={styles.hero_text}>
          Prepare young minds <br /> for a better <span>future.</span>
        </h1>
        <p>
          Let us help you advance students in Digital <br /> Technologies and
          other learning areas with <br /> our project-based learning programme.
        </p>
        {/* Buttons */}
        <div className={styles.levelup_buttons}>
          <div className={styles.levelup_learn_more_button_wrapper}>
            <button type="button" className={styles.learn_more_button}>
              Learn More
            </button>
          </div>
          <div>
            <div className={styles.levelup_sign_up_button_wrapper}>
              <button type="button" className={styles.sign_up_button}>
                Sign Up
              </button>
              <p className={styles.condition_text}>
                *Basic subscription includes <br />
                the first 15 projects free of charge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
