import React from "react";
import Navbar from "../Navbar/Navbar";
// import { render } from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './SignIn.css';


function SignUp()
{

  function AlreadyaCustomer()
  {
    console.log("czcczxc")
    alert("You are already a customer..");
  }


    return(
      <div>
        <Navbar/>
        <div class="container mt-5 mb-5" id="SignInid">
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-6">
                <div class="card px-5 py-5">
                  <h3 class="mt-3 loginheading_">Create Account</h3>
                  <div class="form-input">
                    <input type="text" class="form-control" placeholder="Email address"/>
                  </div>
                  <div class="form-input">
                    <input type="text" class="form-control" placeholder="Name"/>
                  </div>
                  <div class="form-input">
                   <input type="text" class="form-control" placeholder="Phone"/>
                  </div>
                  <div class="form-input">
                    <input type="password" class="form-control" placeholder="Password"/>
                  </div>
                  <button class="Sign_up_button" onClick={()=>AlreadyaCustomer()}>Sign Up</button>
                  <div class="text-center mt-4" >
                    <span className="Alreadyacust">Already a member? </span>
                    <a href="login" class="text-decoration-none"><span className="Alreadyacust1">Login</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
          
        
    );
}

export default SignUp;


//onClick={function}