import React, { Component } from 'react';
import Carousel from 'bootstrap';

export class CarouselSlide extends Component {
    render() {
        return (
            <div class="slide-container">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
    
                    
                    <div class="carousel-inner">
                        <div class="item active">
                            <img src=""/>
                        </div>
    
                        <div class="item">
                            <img src=""/>
                        </div>
    
                        <div class="item">
                            <img src=""/>
                        </div>
                    </div>
    
                    
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default CarouselSlide;