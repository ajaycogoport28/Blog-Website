import React, { useEffect, useState } from "react";
import {useRouter} from "next/router"
import axios from "axios";



function Blog()
{
    const router=useRouter();
    const {blogId}= router.query;
    const [data, setData]= useState({});

    const getBlog=async (id)=>{
        const url = `http://localhost:3000/blog/searchBlogById?id=${id}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);

        setData(responseJson[0]);
    }


    useEffect(()=>{
        if(blogId){
            getBlog(blogId);
        }

    },[blogId])

    return(
        <div>
                <div className="singleBlog_afterclick" >
                    <h1 className="blog_heading_">{data.blog_title}</h1>
                    <div className="Blog-row">
                        <div>
                            <img  src={data.blog_img} width="400px" height="auto"  className="blog_image"/>
                        </div>
                        <div>
                            <p className="blog-parh">{data.blog_desc}</p>
                        </div>
                    </div>
                    <div className="singleBlogButtons" >
                        {/* <button className="deleteBlog"  type="button" onClick={()=>deleteBlog(data.id)}>Delete</button>
                            <button className="editBlog" type="button" onClick={()=>editBlog(data.id)}>Edit</button> */}

                    </div>
                </div>
        </div>
    );
}

export default Blog;