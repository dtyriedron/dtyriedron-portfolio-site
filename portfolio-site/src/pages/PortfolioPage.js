import React, { useState, useEffect } from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col , Button, Row} from 'react-bootstrap';

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

    var colors = ["success", "info", "warning", "danger"];

    return(
        <div>
            <Hero title={name}/>
            <Content>
            <Row>
                <Col md={10}>
                    <p>
                        {description} 
                    </p>
                </Col>
                <Col md={2}>
                    <Button href= {`https://github.com/dtyriedron/${name}`} target="_blank" style={{position: 'absolute', center:0, bottom:0}} variant="success">Github</Button>{' '}
                </Col>
            </Row>
                
            </Content>
            <Content>
                <div style={{border: ".2rem solid #ececec", padding: "1rem"}}>
                    <p>
                        Code coverage:
                    </p>
                    <style type="text/css">
                        {`
                        .progress-bar {
                        color: black;
                        }
                        `}
                    </style>
                    
                    {
                        
                        Object.entries(language).map(([lan, bytes], i) => {
                            console.log(bytes);
                            percent = (parseInt(bytes)/totalBytes)*100;
                                return (                                                            
                                    <ProgressBar key={i} variant={colors[Math.floor(Math.random() * colors.length)]} label={lan +` ${percent.toFixed(2)}%`} now={percent}/>                                    
                                )
                        })
                    }
                </div>

            </Content>
        </div>
    );
}
export default PortfolioPage;