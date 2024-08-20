import React from 'react';
import "../index.css"

  
  const Spinner = () =>  {
	return (
	  <div className='h-screen justify-center items-center'>
        <div className='flex justify-center items-center font-bold text-3xl'>
        Loading ...
        </div>
	  </div>
	);
  }
  
  export default Spinner;
  