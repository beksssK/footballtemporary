import React, {Component} from 'react';
import {Alert, Button, Col, Container, Form, FormGroup} from "reactstrap";
import FormElement from "../../components/UI/Form/FormElement";
import {loginUser} from "../../store/actions/usersActions";
import {connect} from "react-redux";

class Login extends Component {
    state = {
        username: '',
        password: ''
    };
    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };
    submitFormHandler = event => {
        event.preventDefault();

        this.props.loginUser({...this.state});
    };
    render() {
        return (
            <Container className='py-5'>
                <h2>Login</h2>
                {this.props.error && (
                    <Alert color='danger'>{this.props.error.message}</Alert>
                )}
                <Form onSubmit={this.submitFormHandler}>
                    <FormElement
                        propertyName='username'
                        title='Username'
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        type='text'
                        autoComplete='current-username'
                        placeholder='Enter username you registered with'
                        required={true}
                    />
                    <FormElement
                        propertyName='password'
                        title='Password'
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        type='password'
                        autoComplete='current-password'
                        placeholder='Enter password you registered with'
                        required={true}
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}>
                            <Button type='submit' color='primary'>
                                Login
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}
const mapStateToProps = state => ({
    user: state.users.user,
    error: state.users.error
});
const mapDispatchToProps = dispatch => ({
    loginUser: userData => dispatch(loginUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
