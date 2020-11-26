import React from 'react';
import { useTrail, animated } from 'react-spring';

function Trail(props){
    // const items = React.Children.toArray(children);
    const trail = useTrail(props.cards.length, {opacity: 1});
    
    return(
        <div>
            {
                trail.map((index) => (
                    <animated.div
                        key={props.cards[index]}
                        style={props}
                    />
                ))
            }
        </div>
    );
}

export default Trail;