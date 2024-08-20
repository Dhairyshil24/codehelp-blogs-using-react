// import React from "react";
// import Header from "./Header";
// import Blogs from "./Blogs";
// import Pagination from "./Pagination";


// const MainHeader = () => {

//    return( <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
     
//     <Header/>
//     <Blogs/>
//     <Pagination/>

   
//   </div> );
// }

// export default MainHeader

import React from 'react';
import { Outlet } from 'react-router-dom';

  
  const MainHeader = () =>  {
	return (
        <div>
          <Outlet/>
        </div>
      );
  }
  
export default MainHeader;
  