import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import fbLogo from '../../fakeData/Icon/fb.png';
import googleLogo from '../../fakeData/Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserIdentity } from '../../App';
import'./Login.css';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const history=useHistory();
    const location=useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [newUser,setNewUser] =useState(false)
    const [isSignedIn, setIsSignIn] = useContext(UserIdentity);

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleGoogle = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { email, displayName } = res.user;
                const logInUser = {
                    name: displayName,
                    email: email,
                    success:true,
                    error:false
                }
                setIsSignIn(logInUser)
                history.replace(from);
            })

            .catch(() => function (error) {
                const logInUser = {
                    success:true,
                    error: error.message
                }
                setIsSignIn(logInUser)
            });

    }
    const handleFacebook = () => {
        firebase.auth().signInWithPopup(fbProvider)
            .then(res => {

                const { email, displayName } = res.user;
                const logInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    success:true,
                    error:false
                }
                setIsSignIn(logInUser)   
                history.replace(from); 
            })

            .catch(function (error) {
                const logInUser = {
                    success:false,
                    error:error.message
                }
                setIsSignIn(logInUser) 
               

            });
    }

    const handleBlur = (event) => {
        // console.log(event.target.name,event.target.value)
        let isFieldValid = true;
        if (event.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(event.target.value);
            isFieldValid = isEmailValid
            console.log(isEmailValid)
        }
        if (event.target.name === 'password') {
            let isPasswordValid = event.target.value.length > 8;
            let passwordHasNumber = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(event.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...isSignedIn}
            newUserInfo[event.target.name] = event.target.value;

            setIsSignIn(newUserInfo);

        }
    }

    //password & confirmPassword check
    let passwordCheck = false;
    const password1 = isSignedIn.password;
    const password2 = isSignedIn.confirmPassword;
    if (password2 !== '' && password1 !== password2) {
        passwordCheck = 'password does not match';
    }
    console.log(password1, password2, passwordCheck);




    
    const handleNewCreate = (event) => {
        if (isSignedIn.email && isSignedIn.password) {
            firebase.auth().createUserWithEmailAndPassword(isSignedIn.email, isSignedIn.password)
                .then(res => {
                    const newUser = { ...isSignedIn }
                    newUser.error = false;
                    newUser.success = true;
                    setIsSignIn(newUser);
                    history.replace(from);
                    setUserInfo(isSignedIn.firstName,isSignedIn.lastName)
                    console.log(isSignedIn)
                    console.log(res.user)
                })
                .catch(error => {
                    const newUser = { ...isSignedIn }
                    newUser.error = error.message;
                    newUser.success = false;
                    setIsSignIn(newUser);
                    
                });
        }
        event.preventDefault();
    }
 
    const setUserInfo=(firstName,lastName)  => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName:firstName+" "+lastName,
            
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }
    const handleExisting = (event)=>{
        if (isSignedIn.email && isSignedIn.password){
            firebase.auth().signInWithEmailAndPassword(isSignedIn.email, isSignedIn.password)
            .then(res => {
                const newUser = { ...isSignedIn }
                newUser.error = false;
                newUser.success = true;
                setIsSignIn(newUser);
                history.replace(from);
            })
            .catch(error=>{
                const newUser = { ...isSignedIn }
                newUser.error = error.message;
                newUser.success = false;
                setIsSignIn(newUser);
                        
              });
        }
        
          event.preventDefault();
    }
    console.log(isSignedIn)
    return (
        <div className="create-body">
            <Header></Header>
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <div className="col justify-content-center row justify-content-center">
                            { newUser?
                                <form className="shadow p-3 mb-5 bg-white rounded" onSubmit={handleNewCreate}>
                                <div className="form-group">
                                    <label >First Name</label>
                                    <input type="text" className="form-control" name="firstName" required onBlur={handleBlur} />

                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" name="lastName" required  onBlur={handleBlur} />

                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="text" className="form-control" name="email" required onBlur={handleBlur} />

                                </div>


                                <div className="form-group">
                                    <label >password</label>
                                    {
                                        (isSignedIn.email != '' && isSignedIn.password === '') && <small className="form-text text-muted">password should have more than 8 character uppercase lower case with numeric numbers</small>
                                    }
                                    <input type="password" className="form-control" name="password" required onBlur={handleBlur} />

                                </div>
                                <div className="form-group">
                                    <label >Confirm password</label>
                                    <input type="password" className="form-control" name="confirmPassword" required onBlur={handleBlur} />
                                    {
                                        passwordCheck && <small style={{ color: 'red' }} className="form-text">{passwordCheck}</small>
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Create an account" style={{ backgroundColor: 'goldenrod', color: 'black' }} className="form-control" onBlur={handleBlur} />
                                </div>
                                <div className="form-group">
                                    <p>alreay have an account?
                                   
                                            <span onClick={()=>{setNewUser(!newUser)}} style={{cursor: "pointer",color:"goldenrod"}}>Login</span>
                                    </p>
                                </div>




                            </form >: 
                             <form className="shadow p-3 mb-5 bg-white rounded" onSubmit={handleExisting}>
                             <div className="form-group">
                                 <label > Email</label>
                                 <input type="email" name="email" className="form-control" onBlur={handleBlur}  />
                                 
                             </div>
                            <div className="form-group">
                                <label htmlFor="password">password</label>
                                <input className="form-control" name="password" onBlur={handleBlur} type="password" />
                                <input type="checkbox"/>
                                 <label className="form-check-label" >Remember Me</label>
                            </div>   
                             <div className="form-group">
                                 {/* <label ></label> */}
                                 <input type="submit" className="form-control" id="exampleInputEmail1" style={{ backgroundColor: 'goldenrod', color: 'black'} }  aria-describedby="emailHelp" />
                             </div>
                             <div> 
                                
                                 <p>Don't' have an account?
                                         <span onClick={()=>{setNewUser(!newUser)}} style={{cursor: "pointer",color: "goldenrod"}}>create an account</span>
                                 </p>
                             </div> 
                         </form>
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col "> 
                    <div className="col justify-content-center row  justify-content-center">
                    <button className="fb-button" onClick={() => { handleFacebook() }}><img src={fbLogo} className="img-fluid" style={{ width: '35px', height: '35px' }} alt="" /> continue with facebook</button>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col "> 
                    <div className="col justify-content-center row  justify-content-center">
                    <button className="fb-button" onClick={() => { handleGoogle() }}><img src={googleLogo} className="img-fluid" style={{ width: '35px', height: '35px' }} alt="" /> continue with Googles</button>
                    </div>
                    </div>
                </div>
         
         
            </div>

        </div>


    );
};

export default Login;