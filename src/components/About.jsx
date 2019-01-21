import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component{
    render() {
        return (
           <div>
               <Image src="assets/4-Cropped.jpg" className="header-image" />
               <Grid>
                   <Col xs={12} sm={8} smOffset={2}>
                   <Image src="assets/2-Cropped.jpg" className="about-profile-pic" rounded />
                   <h3>The Frank on fire</h3>
                   <p>This is how to build website with React, React-Router and React-Bootstrap.
                    This is how to build website with React, React-Router and React-Bootstrap.</p>
                    <p>This is how to build website with React, React-Router and React-Bootstrap.</p>
                    <p>This is how to build website with React, React-Router and React-Bootstrap.
                    This is how to build website with React, React-Router and React-Bootstrap.</p>
                   </Col>
               </Grid>
           </div>
        )
    }
}