import React, { useState } from 'react';
import styles from './ProfileComponent.module.css';
import EditModal from '../EditModal';

const Index = ({ resume, name, country, email, phone, linkedin, github, span, title, availability,
    isModalOpen, toggleModal, modalType, handleChange, saveChange }) => {
    const [profileImg, setProfileImg] = useState('');
    const displayImg = (value) => {
        setProfileImg(value)
    }
    const hideMsg = () => {
        const msg = document.getElementById('msg');
        msg.style.display = 'none';
    }
    setInterval(hideMsg, 5000);

    return (
        <div className={styles['parent-container']}>
            <div className={styles['NOTE']} id='msg'>Upload Resume is not working on deployed site!</div>
            <div className={styles['container']}>
                {
                    isModalOpen ? <EditModal
                        toggleModal={toggleModal}
                        modalType={modalType}
                        name={name}
                        country={country}
                        email={email}
                        phone={phone}
                        linkedin={linkedin}
                        github={github}
                        span={span}
                        title={title}
                        handleChange={handleChange}
                        saveChange={saveChange}
                        availability={availability}
                        displayImg={displayImg}
                    /> : <></>
                }
                <div className={styles['editable']}>
                    <div className={styles['tag']}>
                        <i className="fas fa-file-alt fa-lg"></i>
                        <span className={styles['tag-name']}>Upload your resume</span>
                    </div>
                    <div className={styles['data-edit']}>
                        {
                            resume ? <div className={styles['data']}>
                                <span className={styles['job-span']}> {resume ? resume : ''}</span>
                            </div> : <span className={styles['data-first']}>
                                Lets start upload your resume <i className="fas fa-arrow-right fa-sm"></i>
                            </span>

                        }
                        <button className={styles['edit']} onClick={() => toggleModal('resume')}> <i className="fas fa-pen fa-lg"></i></button>
                    </div>
                </div>

                <div className={styles['hr']}></div>

                <div className={styles['editable-personal']}>
                    <div className={styles['info-edit']}>
                        <div className={styles['info']}>
                            {
                                profileImg ? <div className={styles['img-holder']}>
                                    <img src={profileImg} alt="" id="img" className={styles["img"]} />
                                </div> : <div className={styles['profile']}>
                                    <span>John</span>
                                </div>

                            }
                            <div className={styles['details']}>
                                <span className={styles['name']}>{!name ? 'John Doe' : name}</span>
                                <span className={styles['country']}>{!country ? 'Albania' : country}</span>
                            </div>
                        </div>
                        <div className={styles['data-edit']}>
                            <button className={styles['edit']} onClick={() => toggleModal('personal')}> <i className="fas fa-pen fa-lg"></i></button>
                        </div>
                    </div>
                    <div className={styles['links']}>
                        <div className={styles['link']}>
                            <i class="fas fa-envelope fa-lg"></i>
                            <span className={styles['link-text']}>{!email ? 'abhishek@gmail.com' : email}</span>
                        </div>
                        <div className={styles['link']}>
                            <i class="fas fa-phone-alt fa-lg"></i>
                            <span className={styles['link-text']}>{!phone ? '+91 7636012703' : phone}</span>
                        </div>
                        <div className={styles['link']}>
                            <a href={!linkedin ? "#" : linkedin} target='_blank'><i class="fab fa-linkedin fa-lg"></i></a>
                        </div>
                        <div className={styles['link']}>
                            <a href={!github ? "#" : github} target='_blank'><i class="fab fa-github fa-lg"></i></a>
                        </div>
                    </div>
                </div>

                <div className={styles['hr']}></div>

                <div className={styles['editable']}>
                    <div className={styles['tag']}>
                        <i className="fas fa-cog fa-lg"></i>
                        <span className={styles['tag-name']}>Overall experience</span>
                    </div>
                    <div className={styles['data-edit']}>
                        <div className={styles['data']}>
                            <span className={styles['job-span']}> {!span ? '7 years/ 0 years remote' : span}</span>
                            <span className={styles['job-title']}> {!title ? 'Average English proficieny' : title}</span>
                        </div>
                        <button className={styles['edit']} onClick={() => toggleModal('experience')}> <i className="fas fa-pen fa-lg"></i></button>
                    </div>
                </div>

                <div className={styles['hr']}></div>

                <div className={styles['editable']}>
                    <div className={styles['tag']}>
                        <i class="far fa-calendar-check fa-lg"></i>
                        <span className={styles['tag-name']}>Availability</span>
                    </div>
                    <div className={styles['data-edit']}>
                        <div className={styles['data']}>
                            <span className={styles['job-span']}>{!availability ? '-' : availability}</span>
                        </div>
                        <button className={styles['edit']} onClick={() => toggleModal('availability')}> <i className="fas fa-pen fa-lg"></i></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Index;
