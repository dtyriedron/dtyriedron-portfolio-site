import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { Row, Col, Card, Button, CardDeck, Container} from 'react-bootstrap';
import Content from '../components/Content';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

function PortfolioMainPage(props){
    const [name, setName] = useState('');
    const [repos, setRepos] = useState('');
    const bgImage = "../res/tri.jpg";


    useEffect(() => {
        fetch('https://api.github.com/users/dtyriedron/repos')
        .then(res => res.json())
        .then(data => {
            setCardData(data);     
        });

    }, []);

    const setCardData = (
        array,
    ) => {
        setName(props.title);
        var arr = array;
        console.log(arr);
        setRepos(arr);
    };

    

    return(
        <div>
            {/* <Hero title={name}> */}
                {/* <Content> */}
                    { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }                
                    <Container fluid={true} style={{padding: '1rem'}}>
                        {/* <Parallax ref={ref => (this.parallax = ref)} pages={1}>
                            <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: {bgImage}, backgroundSize: 'cover' }} /> */}
                            <Row md={12} className="justify-content-center">
                            {
                                Object.entries(repos).map(([int, repo], i) => {
                                    return (         
                                        // <Col> 
                                        <Card border="primary" key={i} style={{width: '15rem', margin: '1rem'}}>
                                            <Card.Header key={i}>{repo.name}
                                            </Card.Header>
                                            <Card.Body key={i}>                                            
                                                <Card.Text key={i}>
                                                    {repo.description}
                                                </Card.Text>                                            
                                            </Card.Body>
                                            <Card.Footer>
                                                <Button key={i} variant="primary">GitHub</Button>
                                            </Card.Footer>
                                        </Card>
                                        // </Col>
                                    )
                                })
                            }

                            </Row>
                        {/* </Parallax> */}
                    </Container>
                {/* </Content> */}
                
                    
                
                
            {/* </Hero> */}
        </div>
    );
}

export default PortfolioMainPage;