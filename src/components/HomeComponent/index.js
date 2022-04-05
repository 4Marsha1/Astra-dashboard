import React from 'react';
import styles from './HomeComponent.module.css';
import homeDeskImg from '../../images/homeDesk.jpg';

const index = () => {
    return (
        <div className={styles['container']}>
            <section className={styles['welcome']}>
                <span className={styles['welcome-text']}>Welcome John!</span>
                <span className={styles['info']}>How to get jobs with top U.S. companies</span>
                <div className={styles['cards']}>
                    <div className={styles['card']}>
                        <span className={styles['number']}>1</span>
                        <span className={styles['card-text']}>Take 1</span>
                        <span className={styles['card-text']}>Tests</span>
                    </div>
                    <div className={styles['card']}>
                        <span className={styles['number']}>2</span>
                        <span className={styles['card-text']}>Pass Live</span>
                        <span className={styles['card-text']}>Coding Challenge</span>
                    </div>
                    <div className={styles['card']}>
                        <span className={styles['number']}>3</span>
                        <span className={styles['card-text']}>Finalize</span>
                        <span className={styles['card-text']}>your resume</span>
                    </div>
                    <div className={styles['card']}>
                        <span className={styles['number']}>4</span>
                        <span className={styles['card-text']}>Receive</span>
                        <span className={styles['card-text']}>job offers</span>
                    </div>
                </div>
            </section>

            <section className={styles['content-container']}>
                <div className={styles['content']}>
                    <div className={styles['img-container']}>
                        <img src={homeDeskImg} alt="home desk" className={styles['img']} />
                    </div>
                    <div className={styles['subsection']}>
                        <span className={styles['header']}>Why Join</span>
                        <div className={styles['points']}>
                            <span className={styles['number']}>1</span>
                            <span className={styles['point-text']}>Work full-time at top Silicon Valley or other U.S. companies.</span>
                        </div>
                        <div className={styles['points']}>
                            <span className={styles['number']}>2</span>
                            <span className={styles['point-text']}>Earn a better salary compared to local companies in your city.</span>
                        </div>
                        <div className={styles['points']}>
                            <span className={styles['number']}>3</span>
                            <span className={styles['point-text']}>Grow as a developer by working with the smartest engineers from all over the world.</span>
                        </div>
                        <div className={styles['points']}>
                            <span className={styles['number']}>4</span>
                            <span className={styles['point-text']}>Get paid monthly directly to your bank account. Forget about issues with PayPal or Payoneer.</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default index;
