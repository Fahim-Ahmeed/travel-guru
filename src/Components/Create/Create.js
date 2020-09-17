import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Create.css';
const Create = () => {
    return (
        <div className="create-body">
            <Header></Header>
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <div className="col-md-12">

                        </div>
                        <div className="col justify-content-center row justify-content-center">
                            <form className="shadow p-3 mb-5 bg-white rounded">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                          
                                    <p>alreay have an account?
                            <Link to="login">
                                            <span>Login</span>
                                        </Link>
                                    </p>
                                </div>
                                <button type="submit" className="button">Create an account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Create;