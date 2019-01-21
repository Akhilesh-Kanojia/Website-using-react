import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component{
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to codeLife.in</h2>
                    <p>This is how to build website with React, React-Router and React-Bootstrap. </p>
                    <Link to='/about'>
                    <Button bsStyle="primary">About</Button>
                    </Link>
                    </Jumbotron>
                     <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="./assets/1-Cropped.jpg" circle className="profile-pic" />
                        <h3>Frank</h3>
                        <p>This is how to build website with React, React-Router and React-Bootstrap.</p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="./assets/2-Cropped.jpg" circle className="profile-pic" />
                        <h3>Frank</h3>
                        <p>This is how to build website with React, React-Router and React-Bootstrap.</p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="./assets/3-Cropped.jpg" circle className="profile-pic" />
                        <h3>Frank</h3>
                        <p>This is how to build website with React, React-Router and React-Bootstrap.</p>
                        </Col>
                     </Row>
            </Grid>
        )
    }
}