import React from 'react';
import { Container, Row } from 'react-bootstrap';


function Hero(props){
    return(
        <Container fluid={true}>
            <Row className="justify-content-center">
                { props.title && <h3 className="display-4 font-weight-bolder">{props.title}</h3> }
            </Row>
            <Row className="justify-content-center">
                { props.subTitle && <h4 className="display-6 font-weight-light">{props.subTitle}</h4> }
            </Row>
            <Row className="justify-content-center">
                { props.text && <h5 className="lead font-weight-light">{props.text}</h5> }
            </Row>
        </Container>
    );
}

export default Hero;