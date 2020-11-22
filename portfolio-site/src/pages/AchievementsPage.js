import React from 'react';
import Hero from '../components/Hero';
import GridLayout from '../components/GridLayout';
import LoadContent from '../components/LoadContent';
import { Container, Row, Spinner } from 'react-bootstrap';

import Achievements from '../assests/data/Achievements.json';


function AchievementsPage(props){
    return(
        <div>
                <LoadContent urls={[
                Achievements,
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
                            <GridLayout page="Achievement" cards={data}/>
                        </div>
                    );
                }   
            }   
            </LoadContent>
        </div>
    );
}
export default AchievementsPage;