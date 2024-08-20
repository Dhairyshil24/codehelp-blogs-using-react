import React from "react";
import { AppContext} from "../context/AppContext";
import { useContext } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


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
        <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
            <div className="flex justify-between w-11/12 max-w-[670px] py-2">
            <button onClick={()=>handlePageChange(page + 1)} className="rounded-md border p-2 px-10"><FaAngleRight />
            </button>
         </div>
         </div>
        ) : ( page === totalPages ? (
         <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
            <div className="flex justify-between w-11/12 max-w-[670px] py-2">
            <button onClick={()=>handlePageChange(page - 1)} className="rounded-md border p-2 px-10"><FaAngleLeft />
            </button>
         </div>
         </div>
        ):(
        <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
            <div className="flex justify-between w-11/12 max-w-[670px] py-2">
            <div className="flex gap-x-2">
        
            <button onClick={()=>handlePageChange(page - 1)} className="rounded-md border p-2 px-10"><FaAngleLeft />
            </button>

            <button onClick={()=>handlePageChange(page + 1)} className="rounded-md border p-2 px-10"><FaAngleRight />
            </button>
            </div>
         <div className="flex py-2 w-[100px] font-bold text-sm">
            {page} out of {totalPages}
         </div>
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
