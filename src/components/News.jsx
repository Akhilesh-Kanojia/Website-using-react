import React, { Component } from 'react';
import { Grid, Row, Col, Image} from 'react-bootstrap';
import './News.css';

export default class News extends Component{
    render() {
        return (
            <div>
                 <Image src="assets/5-Cropped.jpg" className="header-image" />
            <Grid>
                <h2>News</h2>
               <Row>
                   <Col xs={12} sm={8} className="main-section">
                   <p>This is how to build website with React, React-Router and React-Bootstrap.
                    This is how to build website with React, React-Router and React-Bootstrap.</p>
                    <p>This is how to build website with React, React-Router and React-Bootstrap.</p>
                    <p>This is how to build website with React, React-Router and React-Bootstrap.
                    This is how to build website with React, React-Router and React-Bootstrap.</p>
                   </Col>
                   <Col xm={12} sm={4} className="sidebar-section">
                   <Image src="assets/2-Cropped.jpg" className="header-image" />
                   <p>This is how to build website with React, React-Router and React-Bootstrap.
                    This is how to build website with React, React-Router and React-Bootstrap.</p>
                   </Col>
               </Row>
            </Grid>
            </div>
        )
    }
}