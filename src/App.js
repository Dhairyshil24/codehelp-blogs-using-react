
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route,Routes, useSearchParams,Router } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import MainPage from "./components/MainPage";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import { useLocation } from "react-router-dom";


export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      //iska matlab tag wala page show karna h 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    } else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);

    }else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname,location.search]) 
  // <Route path='/support' element={<Support/>}/>
  // <Route path='/about' element={<About/>}/>
  // <Route path='/labs' element={<Labs/>}/>
  // <Route path='*' element={<NotFound/>}/>

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
  
    <Routes>
      <Route path='/' element={<MainHeader/>}>
      <Route index element={<MainPage/>}/>
      <Route path="blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
      </Route>
    </Routes>
    
     
    </div>
  );
}
