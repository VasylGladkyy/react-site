import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardDeck, Container} from "react-bootstrap";

export default class Home extends Component{
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top"
                                        src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet amet
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet amet
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img variant="bottom"
                                      src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>

                        </Card>
                        <Card>
                            <Card.Img variant="top"
                                        src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet amet
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}