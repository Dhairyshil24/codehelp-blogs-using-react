import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Spinner from "./Spinner";
import Card from "./Card"


const Blogs = () => {
  //consume 
  const {posts,loading} = useContext(AppContext);
  return(

    <div className="w-11/12 max-w-[670px] flex flex-col gap-y-7 mt-[120px] mb-[70px]">
        {
            loading ? (<Spinner className="flex items-center justify-center"/>):(
                posts.length === 0 ? (<div>
                    <p>No Post Found</p>
                </div>) : (posts.map((post)=>(
                         <Card post={post}/>
                )))
            )
        }
    </div>
    

  );



}

export default Blogs