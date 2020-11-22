import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';

class LoadContent extends React.Component{
    state = {
        loading: true,
        error: false,
        data: []
    };

    componentDidMount(){
        for (const [index, value] of this.props.urls.entries()) {
            fetch(value)
            .then(res => res.json())
            .then((data) => this.setState({ data, loading: false }))
            .catch((err) => {
               this.setState({ data: value, loading: false})    
            }
            )
        }
    //     fetch(this.props.urls)
    //   .then(res => res.json())
    //   .then((data) => this.setState({ data, loading: false }))
    //   .catch((err) => this.setState({ loading: false, error: true }))
    }

    render(){
        return(
            <div>
                {
                    this.props.children({
                        ...this.props,
                        ...this.state,
                    })
                }
            </div>
        );
    }
}

export default LoadContent;