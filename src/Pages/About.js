import React, { Component } from "react";
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";

export default class About extends Component{
    render() {
        return (
            <section className="about">
                <Container>
                    <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-2">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            Design
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            Team
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                            Programming
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">
                                            Frameworks
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">
                                             Library
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif" alt=""/>
                                        <p>
                                            lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                            lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <img src="https://www.hexacta.com/wp-content/uploads/2018/07/5-clues-to-keep-your-software-development-team-productive-11.jpg" alt=""/>
                                        <p>
                                            lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                            lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        </p>
                                        <p>
                                            lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                            lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <img src="https://strowberrycode.com/wp-content/uploads/2017/11/programming-languages.png" alt=""/>
                                        <p>
                                            lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                            lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <img src="https://coderseye.com/wp-content/uploads/Jquery-Libraries-vs-Frameworks-vs-APIS.jpg" alt=""/>
                                        <p>
                                            lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                            lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <img src="https://miro.medium.com/max/900/1*aWnRHAukJGaB2jVFY5iZCg.jpeg" alt=""/>
                                        <p>
                                            lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                            lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet
                                        </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </section>
        )
    }
}