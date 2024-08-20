import React from "react";
import { useNavigation,useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return(
        <div>
              <Header/>
              <div>
                <button
                onClick={()=> navigation(-1)}
                >Back</button>
                <h2>
                    Blogs of <span>#{category}</span>
                </h2>
              </div>
              <Blogs/>
              <Pagination/>
        </div>

    );

}

export default CategoryPage