import React, { Component } from "react";
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";

export default class Blog extends Component{
    render() {
        return (
            <section className="blog">
                <Container>
                    <Row>
                        <Col md="9">
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                    </p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col md="3">
                            <h5 className="text-center mt-5">Categories</h5>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        Html/Css
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        JavaScript
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Python
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Ruby
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Java
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>

                            <Card className="mt-3" bg="light">
                                <Card.Body>
                                    <Card.Title> Side widget </Card.Title>
                                    <Card.Text>
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}