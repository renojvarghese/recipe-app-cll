import React, { Component } from 'react';
import CardImage from './recipe-img/cayla1-150730-unsplash.jpg';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export class CardItem extends Component {

    state = {
        open:false,
    }

    toggleCard =()=> {
        this.setState({
            open : !this.state.open
        });
    } 

    handleCardExpand = () => {
        this.toggleCard();
    }

    render(){
        const cardExpand = this.state.open ? 'card expanded' : 'card';

        return (
            <div className={cardExpand}>
            <img src={CardImage} alt="Card image cap"></img>
            <div className={CardBody}>
                <h5 className={CardTitle}>Card title</h5>
                <p className={CardSubtitle}>Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                    <div class="recipe-contents">
                <label>Name</label>
                <label>Name</label>
                <label>Name</label>
                <label>Name</label>
                <label>Name</label>
                <label>Name</label>
                </div>
                <button className="toggle-recipe" onClick={this.handleCardExpand}>Click to View</button>
            </div>
        </div>
        )
    }
}

export default CardItem;