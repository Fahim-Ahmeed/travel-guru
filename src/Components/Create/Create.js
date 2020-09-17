import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Create.css';
import fbLogo from '../../fakeData/Icon/fb.png';
import googleLogo from '../../fakeData/Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserIdentity } from '../../App';
firebase.initializeApp(firebaseConfig);

const Create = () => {
   const[isSignedIn,setIsSignIn]=useContext( UserIdentity)
   
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleGoogle=()=>{
        firebase.auth().signInWithPopup(googleProvider)
        .then(res=>{
            const{email,displayName}=res.user;
            const logInUser={
                isSignedIn:true,
                name:displayName,
                email:email,
            }
            //confusion   why setSignInUser is not reset 
            setIsSignIn(logInUser)
            console.log(isSignedIn)
            console.log(email,displayName)
        
        })
     
        .catch(()=>function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(credential)
          });
     
    }
const handleFacebook=()=>{
    firebase.auth().signInWithPopup(fbProvider)
    .then(res=>{
        
        const{email,displayName}=res.user;
        const logInUser={
            isSignIn:true,
            name:displayName,
            email:email,
           
        }
      
        setIsSignIn(logInUser)
        console.log(isSignedIn)
        console.log(email,displayName)
      })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorMessage)
       
      });
}
    return (
        <div className="create-body">
            <Header></Header>
            <div className="container ">
                <div className="row">
                    <div className="col">


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
                        <button className="fb-button" onClick={()=>{handleFacebook()}}><img src={fbLogo} className="img-fluid" alt="" /> continue with facebook</button>

                        <button className="fb-button" onClick={()=>{handleGoogle()}}><img src={googleLogo} className="img-fluid" alt="" /> continue with google</button>



                    </div>


                </div>

            </div>

        </div>


    );
};

export default Create;