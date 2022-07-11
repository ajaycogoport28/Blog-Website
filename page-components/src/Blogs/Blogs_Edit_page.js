import React, { useEffect, useState } from "react";
import {useRouter} from "next/router"
import axios from "axios";
import Navbar from "../Navbar/Navbar";



function EditBlog()
{
    const router=useRouter();
    const {blogId}= router.query;
    const [editData, setEditData]= useState({
        title:'',
        desc:'',
        url:'',
    });

    const getBlog=async (id)=>{
        const url = `http://localhost:3000/blog/searchBlogById?id=${id}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);

        setEditData({
            title:responseJson[0].blog_title,
            desc:responseJson[0].blog_desc,
            url:responseJson[0].blog_img
        })
    }

    const updateEditBlog=async()=>{
        await axios.put(`http://localhost:3000/blog/editBlog/${blogId}`,{
            blog_title:editData.title,
            blog_desc:editData.desc,
            blog_img:editData.url

        })
        router.push("/","/")
    }


    const handleInputChange=(e)=>{

        const value=e.target.value;
        const name=e.target.name;


        setEditData(p=>{
            return {
                ...p,
                [name]:value
            }
        })

    }



    useEffect(()=>{
        if(blogId){
            getBlog(blogId);
        }

    },[blogId])

    return(
        <div>
            <Navbar/>
            <div class="card px-5 py-5 AddBlog_Box">


                     <h3 class="mt-3 loginheading">Edit Your Blog</h3>
                     <div class="form-input">
                      <input type="text" name="title" value={editData.title}
                      onChange={handleInputChange}
                      class="form-control" placeholder="Add Title"/>
                      </div>
                     <div class="form-input">
                       <textarea 
                      onChange={handleInputChange}
                       name="desc" value={editData.desc}  id="" cols="30" rows="10" class="form-control AddText" placeholder="Description"></textarea>
                     </div>

                     <div class="form-input">
                      <input type="text" name="url" value={editData.url}
                      onChange={handleInputChange}
                      class="form-control" placeholder="Add image url"/>
                      </div>
                     
                     <button class="btn btn-primary mt-4 AddButton" onClick={updateEditBlog}  >Save</button>
            </div>
        </div>
    );
}

export default EditBlog;