import React from "react";
import { FcApproval } from "react-icons/fc";
import { NavLink } from "react-router-dom";


const Card = ({post}) => {
   
    console.log("printing one post");
    console.log(post);

    return(
        <div className="">
           <NavLink to={`/blog/${post.id}`}>
           <p className="font-bold text-lg flex items-center"><span>{post.title}</span><FcApproval className="ml-1"/></p>
           </NavLink>
           <p className="text-sm">
            By <span className="italic">{post.author}</span> on
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
             <span className="underline font-bold">{post.category}</span>
             </NavLink>
           </p>
           <p className="text-sm">
            Posted on <span>{post.date}</span>
           </p>
           <p className="text-md py-2">{post.content}</p>
           <div className="flex gap-x-3">
            {post.tags.map((tag)=> {
                return(
                <NavLink to={`/tags/${tag.replaceAll(" ","-")}`}>
                 <span className="text-blue-700 underline font-bold text-xs">{`#${tag}`}</span>
                </NavLink>
                );
            })}
           </div>
        </div>
    );

}

export default Card