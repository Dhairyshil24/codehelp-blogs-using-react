import React, { createContext, useState } from 'react';
import { baseUrl } from '../baseUrl';
//step 1
export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

//data filling pending
    
    async function fetchBlogPosts(page){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{

            const result = await fetch(url);
            const data = await result.json();
            console.log("Printing the data")
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)

        }
        catch(error){

            console.log("error is fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
            

        }
        setLoading(false);
    }

    function handlePageChange(newPage){
        console.log("call to handlePageChange")
        setPage(newPage);
        fetchBlogPosts(newPage);
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange

        
    }
//step 2
    return <AppContext.Provider value={value}>
        <div className="font-extrabold">{page}</div>
        {children}
        </AppContext.Provider>

}

