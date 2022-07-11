import React from "react";
import axios from "axios";

import {useRouter} from "next/router"
// import { Navbar } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";



function AddBlog()
{

    const router= useRouter();

    const addBlog=()=>{
        let tempTitle=document.getElementById('formBlogTitle').value;
        let tempDesc=document.getElementById('formBlogDesc').value;
        let tempImg=document.getElementById('formBlogImg').value;

        console.log("hello ", tempTitle, tempDesc,tempImg);

         axios.post("http://localhost:3000/blog/addBlog", {
            blog_title: tempTitle,
            blog_desc: tempDesc,
            blog_img: tempImg
        }).then((res)=>{
            // alert(`${tempTitle} added successfully`)
            router.push("/", "/");
        }).catch(err=>{console.log(err);})


    }



    return(
        <div>
            <Navbar></Navbar>
            <div class="card px-5 py-5 AddBlog_Box">  
                     <h3 class="mt-3 loginheading">Add Your Blog</h3>
                     <div class="form-input">
                      <input id="formBlogTitle" type="text" class="form-control" placeholder="Add Title"/>
                      
                      </div>
                      <div class="form-input TextareaBox">
                       <textarea id="formBlogDesc" name="" cols="30" rows="10" class="form-control AddText" placeholder="Description"></textarea>
                     </div>
                     <div class="form-input">
                      <input id="formBlogImg" type="text" class="form-control" placeholder="Image URL"/>
                      
                      </div>
                     <button class="AddButton"  onClick={addBlog}  >Add</button>
            </div>
        </div>
    );
}

export default AddBlog;