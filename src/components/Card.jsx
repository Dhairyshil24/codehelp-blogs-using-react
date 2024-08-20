import React from "react";
import { FcApproval } from "react-icons/fc";


const Card = ({post}) => {
   
    console.log("printing one post");
    console.log(post);

    return(
        <div className="">
           <p className="font-bold text-lg flex items-center"><span>{post.title}</span><FcApproval className="ml-1"/></p>
           <p className="text-sm">
            By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
           </p>
           <p className="text-sm">
            Posted on <span>{post.date}</span>
           </p>
           <p className="text-md py-2">{post.content}</p>
           <div className="flex gap-x-3">
            {post.tags.map((tag)=> {
                return <span className="text-blue-700 underline font-bold text-xs">{`#${tag}`}</span>
            })}
           </div>
        </div>
    );

}

export default Card