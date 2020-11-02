import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { Card, Button} from 'react-bootstrap';
import Content from '../components/Content';

function PortfolioMainPage(props){
    const [repos, setRepos] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/dtyriedron/repos')
        .then(res => res.json())
        .then(data => {
            setCardData(data);     
        });

    }, []);

    const setCardData = (
        array,
    ) => {
        var arr = array;
        console.log(arr);
        setRepos(arr);
    };

    return(
        <div>
            <Hero title={props.title}>
                <Content>
                
                    {
                        Object.entries(repos).map(([int, repo], i) => {
                            console.log(repo.name);
                                return (          
                                    <div key={i}>
                                        <p>
                                            repo name:{repo.name}
                                            repo description:{repo.description}
                                        </p>
                                        {/* <Card style={{ minWidth: '450', margin: 'auto' }} key={i}>
                                            <Card.Body key={i}>
                                                <Card.Title key={i}>{repo.name}</Card.Title>
                                                <Card.Text key={i}>
                                                    {repo.description}
                                                </Card.Text>
                                                <Button key={i} variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card> */}
                                    </div>                                           
                                )
                        })
                    }
                
                </Content>
            </Hero>
        </div>
    );
}

export default PortfolioMainPage;