import React, { useState} from 'react';
import { useSpring, animated as a } from 'react-spring';
import Hero from '../components/Hero';
import { Container, Row, Spinner } from 'react-bootstrap';
import GridLayout from '../components/GridLayout';
import LoadContent from '../components/LoadContent';

import Hobbies from '../assests/data/Hobbies.json';

function HobbiesPage(props){
    return(
        <div>
                <LoadContent urls={[
                Hobbies,
            ]}>
            {
                ({ loading, error, data }) => {

                    if (loading) return (
                        <div>
                            <Hero title={props.title} />
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
                            <Hero title={props.title} />
                            <GridLayout page="Hobby" cards={data}/>
                        </div>
                    );
                }   
            }   
            </LoadContent>
        </div>
    );
}
export default HobbiesPage;