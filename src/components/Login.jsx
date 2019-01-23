import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Grid } from 'react-bootstrap';
import validator from './LogValidator';
import './Login.css';

const formStyle = {
    color: '#003259',
    backgroundImage: 'url(./assets/cropola-7.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
};
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    validateForm() {
        const validateErrors = validator({
            email: this.state.email,
            password: this.state.password
        });

        if (!validateErrors) {
            this.props.history.push('/home');
        }
        else {
            const {email, password} = validateErrors;
            email && alert(email);
            password && alert(password);
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value

        });

    }

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <Grid>
                <div className="form-wrapper" style={formStyle}>
                        <form onSubmit={this.handleSubmit} action="home.js">
                            <FormGroup controlId="email" bsSize="large">
                                <FormControl
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <FormControl
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="Password"
                                />
                            </FormGroup>
                            <Button
                                block
                                bsSize="large"
                                onClick={() => this.validateForm()}
                                type="submit"
                            >
                                Login
                </Button>
                        </form>
                </div>
            </Grid>
        );
    }
}