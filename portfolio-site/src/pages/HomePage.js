import React, { useState, useLayoutEffect } from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import {Container, Row, Spinner} from 'react-bootstrap';
import LoadContent from '../components/LoadContent.js';
import Config from '../config.js';

function HomePage(props){
    return(
        <div>
            <LoadContent urls={[
                "https://www.instagram.com/doseofdylz/?__a=1",
            ]}>
            {
            ({ loading, error, data }) => {

                if (loading) return (
                    <div>
                        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
                        <Container fluid={true}>
                            <Row className="justify-content-center">
                                <Spinner classname="justify-content-center" animation="border"/>
                            </Row>
                        </Container>
                    </div>
                );
                if (error) return <span>Error loading</span>

                return(
                    <div>  
                        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>                      
                        <Carousel insta={data} />
                    </div>
                );
            }
            }
            </LoadContent>
        </div>
    );
        
}
export default HomePage;