import React, { useState, useEffect } from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col , Button, Row} from 'react-bootstrap';

function PortfolioPage(props){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState({ data: [] });

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
        setName(array[3].name);
        setDescription(array[3].description);
        fetch(`https://api.github.com/repos/dtyriedron/${array[3].name}/languages`)
        .then(res => res.json())
        .then(languages => {
            setLanguages(languages);     
        });
    };

    // useEffect(() => {
    //     fetch(`https://api.github.com/repos/dtyriedron/${name}/languages`)
    //     .then(res => res.json())
    //     .then(languages => {
    //         setLanguages(languages);     
    //     });
    // }, []);

    const setLanguages = (
        array,
    ) => {
        console.log(array)
        setLanguage(array);
    };


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
                    <Button style={{position: 'absolute', center:0, bottom:0}} href="#" variant="success">Github</Button>{' '}
                </Col>
            </Row>
                
            </Content>
            <Content>
                <div style={{border: ".2rem solid #ececec", padding: "1rem"}}>
                    <p>
                        Code coverage:
                        {console.log(language)}
                    </p>
              
                    <ProgressBar variant="success" now={40} />
                    <ProgressBar variant="info" now={20} />
                    <ProgressBar variant="warning" now={60} />
                    <ProgressBar variant="danger" now={80} />
                </div>

            </Content>
        </div>
    );
}
export default PortfolioPage;