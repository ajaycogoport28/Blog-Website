import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './LogIn.css';


function LogIn()
{

  function LogInpage()
  {
    return(
      <>
      alert(sgjhgd);
      </>
    );
  }


    return(
      <div>
          <Navbar/>
          <div class="container mt-5 mb-5" id="LogInid">
            <div class="row d-flex align-items-center justify-content-center LoginScreen">
              <div class="col-md-6">
                <div class="card px-5 py-5">
                  <h3 class="mt-3 loginheading">Welcome</h3>
                  <div class="form-input">
                    <input type="text" class="form-control" placeholder="Email address"/> 
                  </div>
                  <div class="form-input">
                    <input type="password" class="form-control" placeholder="Password"/>
                  </div>
                  <button class="Log_in_button" onClick={LogInpage}>Log In</button>
                  <div class="text-center mt-4" >
                    <span className="Alreadyacust">Create New Account? </span>
                    <a href="signup" class="text-decoration-none"><span className="Alreadyacust1">Sign Up</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

        
    );
}

export default LogIn;

