import React, { useContext, useEffect, useState } from "react";
import { useLocation,useNavigate} from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header"
import Card from "../components/Card";

const BlogPage = () => {
   
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading,loading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    console.log("printing blogId");
    console.log(blogId);

   const newBaseUrl = 'https://codehelp-apis.vercel.app/api/get-blog';

    useEffect(()=>{
        if(blogId){

            fetchRelatedBlogs();

        }
    },[location.pathname])

    console.log("Printing related blogs");
    console.log(relatedBlogs);


    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);

        }catch(error){
            console.log("error aagaya in blog id wali call me");
            setBlog(null);
            setRelatedBlogs([]);

        }

        setLoading(false);


    }


    return (
       <div>
           <Header/>
           <div className="mt-[300px]">
             <button className="font-bold"
             onClick={()=>navigation(-1)}
             >Back</button>
           </div>
           {
            loading ? <p>Loading</p> : (
                blog ? (<Card post={blog}/>):(<div>Card Not Found</div>)
            )
           }
           <h2 className="font-bold size-3xl">Releated Blogs</h2>
           {
            relatedBlogs.map((post)=> <Card post={post}/>)
           }
       </div>
    );
}

export default BlogPage