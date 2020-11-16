import React, { useState, useEffect} from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Hero from '../components/Hero';
import GridLayout from '../components/GridLayout';
import LoadContent from '../components/LoadContent';

import Android from '../assests/images/android.svg';

function PortfolioMainPage(props){
    return(
        <div>
          <LoadContent urls={[
                "https://api.github.com/users/dtyriedron/repos",
            ]}>
            {
            ({ loading, error, data }) => {
                console.log(data);

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
                        <Hero title={props.title}/>
                        <GridLayout page="PortfolioPage" cards={data}/>
                    </div>
                );
            }
            }
            </LoadContent>
            
        </div>
    );
    
}

export default PortfolioMainPage;