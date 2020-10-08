import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Card from '../components/Card';

import github from '../assests/images/DylanGH.png';
import instagram from '../assests/images/DylanInsta.png';
import strava from '../assests/images/DylanStrava.png';


class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    id:0,
                    title: 'GitHub',
                    subTitle: 'Software storage and sharing',
                    imgSrc: github,
                    link: 'https://github.com/dtyriedron',
                    selected: false
                },
                {
                    id:1,
                    title: 'Instagram',
                    subTitle: 'Photo and video sharing',
                    imgSrc: instagram,
                    link: 'https://www.instagram.com/doseofdylz/',
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
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeitems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;