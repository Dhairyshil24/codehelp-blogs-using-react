import React, { createContext, useState } from 'react';
import { baseUrl } from '../baseUrl';
import { useNavigate } from 'react-router-dom';
//step 1
export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

//data filling pending
    
    async function fetchBlogPosts(page,tag,category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`
        }
        if(category){
            url += `&category=${category}`
        }
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

    function handlePageChange(page){
        navigate({search:`?page=${page}`})
        setPage(page);

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
            {children}
        </AppContext.Provider>

}

