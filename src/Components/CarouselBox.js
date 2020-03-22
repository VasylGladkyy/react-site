import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import forestMountains from "../assets/forest-mountains-fog-clouds-9754.jpg";
import natureForest from "../assets/nature-forest-trees-fog-4827.jpg";

export default class CarouserBox extends Component{
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="600"
                        src={ forestMountains }
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="600"
                        src={ natureForest }
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}