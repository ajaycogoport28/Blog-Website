import React from "react";

import {useRouter} from "next/router"


function Navbar({children})
{

    const router=useRouter();

    const goToLogin=()=>{

        router.push("/login", "/login")
    }
    const goToSignUp=()=>{
        router.push("/signup", "/signup")

    }

    const addNewBlog=()=>{
        router.push("/addBlog", "/addBlog")

    }

    const editBlog=()=>{
        router.push("/edit/[blogId]", "/edit/12eferf ");

    }

    const goToHomePage=()=>{
        router.push("/","/");
    }


 return(
    <div>
        <div className="total">
         <nav className="navbar LoginSignup">
             <a className="navbar-brand" onClick={goToHomePage} href="#"><span className="sp_headingname">Blogging Website</span></a>
             <div className="log_sign">
                <a onClick={addNewBlog}  className="Styles_SignIn">Add Blog</a>
                <a onClick={goToLogin}  className="Styles_Login">Login</a>
                <a onClick={goToSignUp}  className="Styles_SignIn">SignUp</a>
             </div>
    
          </nav>

          <div>
            {children}
          </div>
    </div>
</div>
    
 );   
}

export default Navbar;