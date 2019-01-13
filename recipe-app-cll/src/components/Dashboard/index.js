import React from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";
import CardContainer from "./CardContainer";
import CarouselSlide from "./Carousel";
import SearchButton from "./SearchButton";


export default class Dashboard extends React.Component {
    render() {
        return(
            
            <div>
                <NavBar></NavBar>
                <Menu></Menu>
                <main>
                <CarouselSlide></CarouselSlide>
                <SearchButton></SearchButton>
                <CardContainer></CardContainer>
                </main>
            </div>
        )
    }
}