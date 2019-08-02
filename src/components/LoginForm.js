import React, {Component} from 'react';
import {Button, Form} from 'react-bootstrap'
import PropTypes from 'prop-types';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label column size="sm">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label column size="sm">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </React.Fragment>
        );
    }
}

LoginForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string
};

export default LoginForm;