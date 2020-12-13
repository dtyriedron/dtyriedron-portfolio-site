// import react from 'react';

import github from '../images/Github.png';
import strava from '../images/Strava.jpeg';
import linkedIn from '../images/linkedIn.jpeg';
import insta from '../images/insta.jpg';

const titleData = [
    {
        id:0,
        title: 'Instagram',
        subTitle: 'Photo and video sharing',
        // imgSrc: props.insta["graphql"]["user"]["profile_pic_url_hd"],
        imgSrc: insta,
        link: 'https://www.instagram.com/doseofdylz/',
        selected: false
    },
    {
        id:1,
        title: 'GitHub',
        subTitle: 'Software storage and sharing',
        imgSrc: github,
        link: 'https://github.com/dtyriedron',
        selected: false
    },
    {
        id:2,
        title: 'Strava',
        subTitle: 'Track exercise and share with others',
        imgSrc: strava,
        link: 'https://www.strava.com/athletes/8795009',
        selected: false
    },
    {
        id:3,
        title: 'LinkedIn',
        subTitle: 'Connect your work and business',
        imgSrc: linkedIn,
        link: 'https://www.linkedin.com/in/dylan-tyrie-dron-041321184/',
        selected: false
    },
];

export default titleData;