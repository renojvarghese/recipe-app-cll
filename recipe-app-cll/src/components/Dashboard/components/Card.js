import React, { Component } from 'react';
import CardImage from './recipe-img/cayla1-150730-unsplash.jpg';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export class CardItem extends Component {
    render(){
        const { recipe } = this.props;
        return (
            <div className="card">
            <img src={CardImage} alt="Card image cap"></img>
            <div className={CardBody}>
                <h5 className={CardTitle}>{recipe.title}</h5>
                <p className={CardSubtitle}>{recipe.description}</p>
                <p>Cooktime: {recipe.cook_time}</p>
                <p>Ingredients: {JSON.stringify(recipe.ingredients)}</p>
                <a href="#" className="toggle-recipe">Click to View</a>
            </div>
        </div>
        )
    }
}

export default CardItem;