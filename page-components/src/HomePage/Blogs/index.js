import React, { useEffect, useState } from "react";
import {useRouter} from "next/router"
import axios from "axios";



function Blogs(){
    const router=useRouter();
    var [blogs, setBlogs] = useState([]);
    var [searchBlogValue, setSearchBlogValue] = useState("");


    const getBlogRequest = async() =>{
        const url = `http://localhost:3000/blog/searchBlog?blog_title=${searchBlogValue}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
        setBlogs(responseJson);
        console.log("error check",blogs);
    }

    const deleteBlog=async(id) =>{
        const url = `http://localhost:3000/blog/deleteBlog?blog_id=${id}`;
        await axios.delete("http://localhost:3000/blog/deleteBlog",{
            "blog_id":id
        })
        getBlogRequest();
    }

    const editBlog=(id)=>{
        router.push("/edit/[blogId]",`/edit/${id}`);
    }
    const searchBlogs =() => {
        let temp= document.getElementById('searchId').value;
        setSearchBlogValue(temp); 
    }

    useEffect(()=>{
            getBlogRequest();
    },[searchBlogValue]);


    const openBlog=(id)=>{
        router.push("/[blogId]",`/${id}`);
    }

    return <div>
        <div className="search_">
        <input type="text" id='searchId' onChange={searchBlogs} className="input_search" placeholder="search here..."/>
            {/* <button type='button' onClick={searchBlogs} id="searchId" className="search_right">search</button> */}
        </div>

        {blogs.length===0 && <div>NO BLOGS FOUND</div>}


        <div className="allBlogs" >
         {blogs.map(
                    m=>{
                        return(<div className="singleBlog"  key={m.id} >
                            <img style={{cursor:"pointer"}} onClick={()=>openBlog(m.id)}  src={m.blog_img} width="300" height="auto"  />
                            <h4 className="Heading_" style={{cursor:"pointer"}} onClick={()=>openBlog(m.id)} >{m.blog_title}</h4>
                            <div className="singleBlogButtons" >
                            <button className="deleteBlog"  type="button" onClick={()=>deleteBlog(m.id)}>Delete</button>
                            <button className="editBlog" type="button" onClick={()=>editBlog(m.id)}>Edit</button>
                            </div>
                            </div>
                        );
                    }
                )}

    </div>
    </div>
}


export default Blogs;