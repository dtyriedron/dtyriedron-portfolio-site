import React from 'react';
import Hero from '../components/Hero';
import GridLayout from '../components/GridLayout';

import data from '../assests/data/Achievements.json';

function AchievementsPage(props){
    console.log(data);
    return(
        <div>
            <Hero title={props.title}/>
            <GridLayout page="Achievement" cards={data}/>   
        </div>
    );
}
export default AchievementsPage;