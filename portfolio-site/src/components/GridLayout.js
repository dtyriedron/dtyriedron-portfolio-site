import React from 'react';
import { Row, Card, Button, Container} from 'react-bootstrap';

function GridLayout(props){

    function handleClick(pos) {     
        const home = process.env.PUBLIC_URL + '';
        document.location = `${home}/${props.page}/?pos=${pos}`;
    }

    return(
        <div>
            <Container fluid={true} style={{padding: '1rem'}}>
                <Row md={12} className="justify-content-center">  
                {
                    Object.entries(props.cards).map(([pos, card], i) => {
                        return (         
                            // <Col> 
                            <Card border="primary" key={i} style={{width: '15rem', margin: '1rem'}}>
                                <Card.Header key={i} style={{width: '100%'}}>{card.name}                                            
                                </Card.Header>
                                <Card.Body key={i}>
                                    {
                                        // Object.entries(language).map((lan, i) =>{
                                        //     // console.log(language[lan])
                                        //     return(
                                        //         <Card.Img key={i} style={{width:'25%'}} variant="top" src={Android}/>
                                        //     );
                                        // })
                                    }                                            
                                    <Card.Text key={i}>
                                        {card.description}
                                    </Card.Text>                                            
                                </Card.Body>
                                <Card.Footer>
                                <Button key={i} style={{width:'70%', marginRight:'5%'}} onClick={()=> handleClick(pos)} variant="primary">{props.page}
                                    </Button>
                                </Card.Footer>
                            </Card>
                        )
                    })
                }

                </Row>
            </Container>
        </div>
    );
}

export default GridLayout;