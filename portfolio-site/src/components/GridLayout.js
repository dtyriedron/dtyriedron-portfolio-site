import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import Trail from '../components/Trail';

function GridLayout(props){
    function handleClick(pos) {     
        const home = process.env.PUBLIC_URL + '';
        document.location = `${home}/${props.page}/?pos=${pos}`;
    }

    return(
        
        <Grid container className="justify-content-center" style={{padding: '1rem'}}>

                {/* <Trail cards={Object.entries(props.cards)}> */}
                    {
                        Object.entries(props.cards).map(([pos, card], i) => {
                            return (
                                <Card style={{width: '16rem', margin: '1rem'}} key={i}>
                                    <CardHeader 
                                        title={card.name}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={()=> handleClick(pos)} style={{bottom:'0'}}>
                                            {props.page + " page"}
                                        </Button>
                                    </CardActions>
                                </Card>
                            )
                        })
                    }
                {/* </Trail> */}

        </Grid>
    );
}

export default GridLayout;