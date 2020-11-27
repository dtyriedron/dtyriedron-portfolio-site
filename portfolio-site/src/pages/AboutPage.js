import React from 'react';
import Typography from '@material-ui/core/Typography';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){
    return(
        <div>
            <Hero title={props.title}/>

            <Content>
                <Typography variant="subtitle1" color="secondary"> Hello, my name is Dylan. I am a full stack software engineer with experience in Java, Android, C++, C#, Arduino, HTML, ReactJS, Ada, C, CSS, JavaScript, Python and Haskell. </Typography>
                
            </Content>
        </div>
    );
}
export default AboutPage;