import { FETCH_USER_DETAILS, SAVE_USER_DETAILS } from "./types";

export const fetchUser = () => {
    const resume = localStorage.getItem('resume') === null ? '' : JSON.parse(localStorage.getItem('resume'));
    const personalData = localStorage.getItem('personalData') === null ? {
        profile_pic: '', name: '', country: '', email: '', phone: '', linkedIn: '', github: ''
    } : JSON.parse(localStorage.getItem('personalData'));
    const experience = localStorage.getItem('experience') === null ? {
        job_span: '', job_title: ''
    } : JSON.parse(localStorage.getItem('experience'));
    const availability = localStorage.getItem('availability') === null ? '' : JSON.parse(localStorage.getItem('availability'));
    const user = {
        resume: resume,
        profile: personalData.profile_pic,
        name: personalData.name,
        country: personalData.country,
        email: personalData.email,
        phone: personalData.phone,
        linkedIn: personalData.linkedIn,
        github: personalData.github,
        span: experience.job_span,
        title: experience.job_title,
        availability: availability
    }
    return {
        type: FETCH_USER_DETAILS,
        payload: user
    }
}

export const saveUser = (value, state) => {
    const { resume, profile, name, country, email, phone, linkedin, github, span, title, availability } = state;
    switch (value) {
        case 'resume':
            if (resume !== '') {
                localStorage.setItem('resume', JSON.stringify(resume.name))
            }
            else {
                alert('attach resume');
                return;
            }
            break;
        case 'personal':
            if (profile && name && phone && country && email && linkedin && github) {
                const personalData = {
                    profile_pic: profile.name,
                    name: name,
                    phone: phone,
                    country: country,
                    email: email,
                    linkedin: linkedin,
                    github: github
                }
                localStorage.setItem('personalData', JSON.stringify(personalData))
            }
            else {
                alert('fields empty');
                return;
            }
            break;
        case 'experience':
            if (span && title) {
                const experience = {
                    job_title: title,
                    job_span: span
                }
                localStorage.setItem('experience', JSON.stringify(experience))
            }
            else {
                alert('fields empty');
                return;
            }
            break;
        case 'availability':
            if (availability) {
                localStorage.setItem('availability', JSON.stringify(availability))
            }
            else {
                alert('fields empty');
                return;
            }
            break;
        default: return;
    }
    return {
        type: SAVE_USER_DETAILS
    }
}