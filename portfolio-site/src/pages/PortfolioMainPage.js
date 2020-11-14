import React, { useState, useEffect} from 'react';
import Hero from '../components/Hero';
import { Row, Card, Button, Container} from 'react-bootstrap';

function PortfolioMainPage(props){
    const [name, setName] = useState('');
    const [repos, setRepos] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/dtyriedron/repos')
        .then(res => res.json())
        .then( data => {
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

    function handleClick(pos) {     
      // alert(pos);   
      console.log(pos);
      document.location = `/PortfolioPage/?pos=${pos}`;
    }

    

    return(
        <div>
          <Hero title={props.title}/>
                    {/* { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }                 */}
                    <Container fluid={true} style={{padding: '1rem'}}>
                            <Row md={12} className="justify-content-center">  
                            {
                                Object.entries(repos).map(([pos, repo], i) => {
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
                                                <Button key={i} style={{marginLeft:'20%', width:'75'}} onClick={()=> handleClick(pos)} variant="primary">Project Page
                                                </Button>
                                                {/* <Route exact path="/PortfolioPage">
                                                  {<Project pos={3}/>}
                                                </Route> */}
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


// import { render } from 'react-dom'
// import React, { useState } from 'react'
// import { useSprings, animated, interpolate } from 'react-spring'
// import { useGesture } from 'react-use-gesture'
// import './styles.css'

// const cards = [
//   'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
//   'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
//   'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
//   'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
//   'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
//   'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
// ]

// // These two are just helpers, they curate spring data, values that are later being interpolated into css
// const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
// const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// // This is being used down there in the view, it interpolates rotation and scale into a css transform
// const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

// function Deck() {
//   const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
//   const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
//   // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
//   const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
//     const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
//     const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
//     if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
//     set(i => {
//       if (index !== i) return // We're only interested in changing spring-data for the current spring
//       const isGone = gone.has(index)
//       const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
//       const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
//       const scale = down ? 1.1 : 1 // Active cards lift up a bit
//       return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
//     })
//     if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
//   })
//   // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
//   return props.map(({ x, y, rot, scale }, i) => (
//     <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
//       {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
//       <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
//     </animated.div>
//   ))
// }

// render(<Deck />, document.getElementById('root'))