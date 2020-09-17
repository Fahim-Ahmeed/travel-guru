import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Login = () => {
    return (
        <div className="login-body">
            <Header></Header>
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <div className="col-md-12">

                        </div>
                        <div className="col justify-content-center row justify-content-center">
                            <form className="shadow p-3 mb-5 bg-white rounded">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">User name or email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">password</label>
                                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                    <p>Don't' have an account?
                            <Link to="create">
                                            <span>create an account</span>
                                        </Link>

                                    </p>
                                </div>
                                <Link to="place">
                                    <button type="submit" className="button">login</button>
                                </Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;