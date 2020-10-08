import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){
    return(
        <div>
            <Hero title={props.title}/>

            <Content>
                <p>Hello, my name is Dylan. I am a full stack software engineer with experience in Java, Android, C++, C#, Arduino, HTML, ReactJS, Ada, C, CSS, JavaScript, Python and Haskell.</p>
            </Content>
        </div>
    );
}
export default AboutPage;