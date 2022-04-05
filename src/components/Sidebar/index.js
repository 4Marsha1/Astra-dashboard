import React from 'react';
import styles from './Sidebar.module.css';
import { ReactComponent as CheckBox } from '../../icons/checkBox.svg';
import { ReactComponent as Home } from '../../icons/home.svg';
import { ReactComponent as Box } from '../../icons/box.svg';

const index = ({ handleClick }) => {
    return (
        <div className={styles['sidebar']}>
            <span className={styles['logo']}>ASTRA</span>
            <div className={styles['segment']}>
                <div className={styles['tab']}>
                    <CheckBox className={styles['icons']} />
                    <span className={styles['tab-text']}>Available for Job</span>
                </div>
            </div>

            <div className={styles['tab']}>
                <Home className={styles['icons']} />
                <span className={styles['tab-text']} onClick={() => handleClick('Home')}>Home</span>
            </div>

            <div className={styles['segment']}>
                <div className={styles['tab']}>
                    <CheckBox className={styles['icons']} />
                    <span className={styles['tab-text']} onClick={() => handleClick('Profile')}>Profile</span>
                </div>
                <div className={styles['tab']}>
                    <Box className={styles['icons-2']} />
                    <span className={styles['tab-text-2']}>Apply for Jobs</span>
                </div>
                <div className={styles['tab']}>
                    <Box className={styles['icons-2']} />
                    <span className={styles['tab-text-2']}>Mail Box</span>
                </div>
            </div>
        </div>
    );
};

export default index;
