import React from 'react';
import styles from './EditModal.module.css';

const Index = ({ name, country, email, phone, linkedin, github, span, title, availability,
    toggleModal, modalType, handleChange, displayImg, saveChange }) => {

    const fileHandler = (e) => {
        const reader = new FileReader();
        const event = {
            target: {
                name: 'resume',
                value: e.target.files[0]
            }
        }
        handleChange(event)
        reader.readAsDataURL(e.target.files[0])
    };
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                displayImg(reader.result);
            }
        }
        const event = {
            target: {
                name: 'profile',
                value: e.target.files[0]
            }
        }
        handleChange(event)
        reader.readAsDataURL(e.target.files[0])
    };

    switch (modalType) {
        case 'resume':
            return (
                <div className={styles['modal-container']}>
                    <div className={styles['modal']}>
                        <i onClick={toggleModal} class="fas fa-window-close fa-2x" style={{ cursor: 'pointer' }}></i>
                        <form className={styles['form']}>
                            <label className={styles['label']} htmlFor="resume">Upload your resume</label>
                            <input className={styles['file-input']}
                                id='resume'
                                name='resume'
                                type="file"
                                accept='application/pdf'
                                onChange={fileHandler}
                            />
                            <input className={styles['save']} type="submit" value="Save" onClick={(e) => saveChange(e, 'resume')} />
                        </form>
                    </div>
                </div>
            );
        case 'personal':
            return (
                <div className={styles['modal-container']}>
                    <div className={styles['modal']}>
                        <i onClick={toggleModal} class="fas fa-window-close fa-2x" style={{ cursor: 'pointer' }}></i>
                        <form className={styles['form']} >
                            <label className={styles['label']}>Update your personal details</label>
                            <input className={styles['profile']} id='profile' name='profile'
                                type="file" accept='image/*' onChange={imageHandler} />
                            <input className={styles['input']} type="text" name='name'
                                value={name} placeholder='Name' onChange={handleChange} />
                            <input className={styles['input']} type="text" name='country'
                                value={country} placeholder='Country' onChange={handleChange} />
                            <input className={styles['input']} type="email" name='email'
                                value={email} placeholder='Email Address' onChange={handleChange} />
                            <input className={styles['input']} type="number" name='phone'
                                value={phone} placeholder='Phone Number' onChange={handleChange} />
                            <input className={styles['input']} type="url" name='linkedin'
                                value={linkedin} placeholder='LinkedIn Profile' onChange={handleChange} />
                            <input className={styles['input']} type="url" name='github'
                                value={github} placeholder='Github Profile' onChange={handleChange} />
                            <input className={styles['save']} type="submit" value="Save" onClick={(e) => saveChange(e, 'personal')} />
                        </form>
                    </div>
                </div>
            );
        case 'experience':
            return (
                <div className={styles['modal-container']} >
                    <div className={styles['modal']}>
                        <i onClick={toggleModal} class="fas fa-window-close fa-2x" style={{ cursor: 'pointer' }}></i>
                        <form className={styles['form']}>
                            <label className={styles['label']}>Update your latest work experience</label>
                            <input className={styles['input']} type="text" name='span'
                                value={span} placeholder='Time Span' onChange={handleChange} />
                            <input className={styles['input']} type="text" name='title'
                                value={title} placeholder='Job Title' onChange={handleChange} />
                            <input className={styles['save']} type="submit" value="Save" onClick={(e) => saveChange(e, 'experience')} />
                        </form>
                    </div>
                </div>
            );
        case 'availability':
            return (
                <div className={styles['modal-container']}>
                    <div className={styles['modal']}>
                        <i onClick={toggleModal} class="fas fa-window-close fa-2x" style={{ cursor: 'pointer' }}></i>
                        <form className={styles['form']}>
                            <label className={styles['label']}>Update your availability</label>
                            <select className={styles['dropdown']} name="availability"
                                id='availability' value={availability} onChange={handleChange}>
                                <option value="" selected disabled>-Select-</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                            </select>
                            <input className={styles['save']} type="submit" value="Save" onClick={(e) => saveChange(e, 'availability')} />
                        </form>
                    </div>
                </div>
            );
        default: return <div className={styles['modal-container']}>
            <div className={styles['modal']}>
                <i onClick={toggleModal} class="fas fa-window-close fa-2x" style={{ cursor: 'pointer' }}></i>
                <span className={styles['invalid']}>Error! </span>
            </div>
        </div>
    }
};

export default Index;
