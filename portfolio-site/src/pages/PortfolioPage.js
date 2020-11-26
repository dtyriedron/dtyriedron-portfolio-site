import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import LinearProgressWithLabel from '../components/LinearProgressWithLabel';

function PortfolioPage(){
    var url = new URL(window.location.href);
    var param = url.searchParams.get("pos");

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/dtyriedron/repos')
        .then(res => res.json())
        .then(data => {
            setData(data);     
        });

    }, []);

    const setData = (
        array,
    ) => {
        console.log(array)
        setName(array[param].name);
        setDescription(array[param].description);
        fetch(`https://api.github.com/repos/dtyriedron/${array[param].name}/languages`)
        .then(res => res.json())
        .then(languages => {
            setLanguages(languages);     
        });
    };

    const setLanguages = (
        object,
    ) => {
        console.log(object)
        var obj = object;
        setLanguage(obj);
    };

    var totalBytes =0;
    for(var x in language){
        totalBytes+=parseInt(language[x])
    }
    console.log(totalBytes);
    var percent=0;

    return(
        <div>
            <Hero title={name}/>
            <Grid container style={{paddingLeft:"25%"}}>
                <Grid container item>
                    <Grid item xs={7}>
                        <p>
                            {description} 
                        </p>
                    </Grid>
                    <Grid item xs={1}>
                        <Button href= {`https://github.com/dtyriedron/${name}`} target="_blank" style={{right:0, bottom:0, width:"100%"}} variant="contained">Github</Button>{' '}
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <div style={{border: ".2rem solid #ececec", padding: "1rem"}}>
                        <p>
                            Code coverage:
                        </p> 
                        {
                            
                            Object.entries(language).map(([lan, bytes], i) => {
                                console.log(bytes);
                                percent = (parseInt(bytes)/totalBytes)*100;
                                    return (                                                            
                                        <LinearProgressWithLabel key={i} value={percent} lan={lan}/>
                                    )
                            })
                        }
                    </div>

                </Grid>
            </Grid>
        </div>
    );
}
export default PortfolioPage;