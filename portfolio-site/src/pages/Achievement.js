import React from 'react';
import Hero from '../components/Hero';

import data from '../assests/data/Achievements.json';

function Achievement(){
    var url = new URL(window.location.href);
    var param = url.searchParams.get("pos");
    console.log(data[param].name);
    return(
        <div>
            <Hero title={data[param].name} text={data[param].description}/>
        </div>
    );
}
export default Achievement;