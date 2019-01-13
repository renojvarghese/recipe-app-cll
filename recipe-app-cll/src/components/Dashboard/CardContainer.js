import React, { Component } from 'react';

export class Cards extends Component {

    
    
    render() {
        return (
            <div className="card-container">
                <div className="card">
                    <img className="card-img-top" src="./img/recipe IMG/cayla1-150730-unsplash.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" className="toggle-recipe">Click to View</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="./img/recipe IMG/alex-loup-392625-unsplash.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" className="toggle-recipe">Click to View</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="./img/recipe IMG/dose-juice-1184446-unsplash.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" className="toggle-recipe">Click to View</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="./img/recipe IMG/emiliano-vittoriosi-703094-unsplash.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" className="toggle-recipe">Click to View</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="./img/recipe IMG/maria-mekht-159066-unsplash.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" className="toggle-recipe">Click to View</a>
                    </div>
                </div>
            </div>
        )
    }    
    
}

export default Cards;