import React from "react";
import { AppContext} from "../context/AppContext";
import { useContext } from "react";

const Pagination = () => {
    const {       posts,
                  setPosts,
                  loading,
                  setLoading,
                  page,
                 setPage,
                  totalPages,
                 setTotalPages,
                 fetchBlogPosts,
                  handlePageChange} = useContext(AppContext);
    

    return(
    
        page === 1 ? (
            <div className="w-full bg-violet-300 text-center border border-yellow-500">
            <button onClick={()=>handlePageChange(page + 1)} className="w-full py-2">Next</button>
         </div>
        ) : ( page === 7 ? (
            <div className="w-full bg-violet-300 text-center border border-yellow-500">
            <button onClick={()=>handlePageChange(page - 1)} className="w-full py-2">Previous</button>
         </div>
        ):(
            <div className="flex justify-between bg-violet-300">
            <div onClick={()=>handlePageChange(page - 1)} className="w-1/2 text-center border border-yellow-500">
            <button className="w-full py-2">Previous</button>
            </div>
         <div className="w-1/2 text-center border border-yellow-500">
            <button onClick={()=>handlePageChange(page + 1)} className="w-full py-2">Next</button>
         </div>
     </div>
        )

 

        )

    //  <div className="flex justify-between bg-violet-500">
    //      <div onClick={()=>handlePageChange(page - 1)} className="w-1/2 text-center border border-yellow-500">
    //         <button className="w-full py-2">Previous</button>
    //      </div>
    //      <div className="w-1/2 text-center border border-yellow-500">
    //         <button onClick={()=>handlePageChange(page + 1)} className="w-full py-2">Next</button>
    //      </div>
    //  </div>
    );
}

export default Pagination;
