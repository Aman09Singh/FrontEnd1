import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class TrainBetwStation extends Component {
    render() {

        let train = JSON.parse(localStorage.getItem("train"));


        let list = train.map(nameacd => {
        <li key={nameacd.id}>
            {nameacd.name}</li>})
        
        return (
            <div>
                <div>                    
{
               list
}
<button></button> 
                </div>
            </div>
        )
    }
}

export default TrainBetwStation
