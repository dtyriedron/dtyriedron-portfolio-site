import React, { useState, useEffect } from 'react';
import { Container, Row} from 'react-bootstrap';

import Card from '../components/Card';
// import Photo from '../components/Photo';


import github from '../assests/images/DylanGH.png';
import instagram from '../assests/images/DylanInsta.png';
import strava from '../assests/images/DylanStrava.png';


class Carousel extends React.Component{
    constructor(props){
        console.log(props.insta);
    super(props);
        this.state={
            items:[
                
                {
                    id:0,
                    title: 'Instagram',
                    subTitle: 'Photo and video sharing',
                    imgSrc: props.insta["graphql"]["user"]["profile_pic_url_hd"],
                    link: 'https://www.instagram.com/doseofdylz/',
                    selected: false
                },
                {
                    id:1,
                    title: 'GitHub',
                    subTitle: 'Software storage and sharing',
                    imgSrc: github,
                    link: 'https://github.com/dtyriedron',
                    selected: false
                },
                {
                    id:2,
                    title: 'Strava',
                    subTitle: 'Track exercise and share with others',
                    imgSrc: strava,
                    link: 'https://www.strava.com/athletes/8795009',
                    selected: false
                },
                {
                    id:3,
                    title: 'LinkedIn',
                    subTitle: 'Connect your work and business',
                    imgSrc: "https://media-exp1.licdn.com/dms/image/C5635AQHQ7bWKXod7lA/profile-framedphoto-shrink_400_400/0?e=1605553200&v=beta&t=WD1j6UH8s9Ca8vUkDCiTBLPbQcMD3ovbhJa3eJ8n6JE",
                    link: 'https://www.linkedin.com/in/dylan-tyrie-dron-041321184/',
                    selected: false
                }
            ]
        }
    }
    

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeitems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true} >
                <Row className="justify-content-center">
                    {this.makeitems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;