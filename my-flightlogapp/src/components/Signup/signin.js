import React, {Component} from 'react';
import "./signin.css"

export default class Signin extends Component{
    render(){
        let handleSubmit = async (e) => {
            e.preventDefault();
            try {
              let res = await fetch("https://httpbin.org/post", {
                method: "POST",
                body: JSON.stringify({
                  name: name,
                  email: email,
                  mobileNumber: mobileNumber,
                }),
              });
              let resJson = await res.json();
              if (res.status === 200) {
                setName("");
                setEmail("");
                setMessage("User created successfully");
              } else {
                setMessage("Some error occured");
              }
            } catch (err) {
              console.log(err);
            }
          };

        return (
            <div className="containersignin">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><i className="fab fa-facebook-square"></i></span>
                            <span><i className="fab fa-google-plus-square"></i></span>
                            <span><i className="fab fa-twitter-square"></i></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="username"/>
                                
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input 
                                type="password" 
                                className="form-control" 
                                placeholder="password"/>
                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox"/>Remember Me
                            </div>
                            <div className="form-group">
                                <input 
                                type="submit" 
                                value="Login" 
                                className="btn float-right login_btn"/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account?<a href="#">Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}