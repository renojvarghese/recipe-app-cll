import React, { Component } from 'react';
import CardItem from '../components/Card';

export class Cards extends Component {

    
    
    render() {
        return (
            <div className="card-container">
                {this.props.recipes.map(recipe => (
                    <CardItem recipe={recipe}></CardItem>
                ))}                
            </div>
        )
    }    
    
}

export default Cards;