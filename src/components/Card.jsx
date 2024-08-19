
const Card = ({post}) => {
   
    console.log("printing one post");
    console.log(post);

    return(
        <div className="flex flex-col w-1/2 mx-auto border border-violet-900 border-b-4">
           <p className="font-bold">{post.title}</p>
           <p>
            By <span>{post.author}</span> on <span>{post.category}</span>
           </p>
           <p>
            Posted on <span>{post.date}</span>
           </p>
           <p className="">{post.content}</p>
           <div>
            {post.tags.map((tag)=> {
                return <span>{`#${tag}`}</span>
            })}
           </div>
        </div>
    );

}

export default Card