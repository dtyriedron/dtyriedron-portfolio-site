import React, { useState, useEffect } from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

function PortfolioPage(props){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/dtyriedron/repos')
        .then(res => res.json())
        .then(data => {
            setData(data);     
        });
    }, []);

    
    const setData = (
        array,
    ) => {
        console.log(array)
        setName(array[3].name);
        setDescription(array[3].description);
    };


    return(
        <div>
            <Hero title={name}/>
            <Content>
                <p>
                    {description}
                </p>
            </Content>
        </div>
    );
}
export default PortfolioPage;