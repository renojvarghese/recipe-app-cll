import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./containers/NavBar";
import Menu from "./components/Menu";
import CardContainer from "./containers/CardContainer";
import CarouselSlide from "./components/Carousel";
import SearchButton from "./components/SearchButton";
import MenuBtn from "./components/MenuBtn";



export default class Dashboard extends React.Component {
    
    render() {
        return(
            
            <div>
                <NavBar>
                    <MenuBtn></MenuBtn>    
                </NavBar>               
                <main>
                <Menu></Menu>
                <CarouselSlide></CarouselSlide>
                <SearchButton></SearchButton>
                <CardContainer></CardContainer>
                </main>
            </div>
        )
    }
}