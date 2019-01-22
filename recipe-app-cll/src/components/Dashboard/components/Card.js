import React, { Component } from 'react';
import CardImage from './recipe-img/cayla1-150730-unsplash.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export class CardItem extends Component {
    render(){
        return (
            <div className="card">
            <img src={CardImage} className={CardImg} alt="Card image cap"></img>
            <div className={CardBody}>
                <h5 className={CardTitle}>Card title</h5>
                <p className={CardSubtitle}>Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <a href="#" className="toggle-recipe">Click to View</a>
            </div>
        </div>
        )
    }
}

export default CardItem;