import React from 'react'

import 'react-toastify/dist/ReactToastify.css';
const FetchList = ({lists=[]}) => {
  
      
  return (
    <div className='fetch_container'>
        {
            lists.map((list)=>{
             return(<>
             <div className='list_container '>
           <div >
            
            {list.title}
           </div>
           <div className='flex justify-between gap-2'>
        
            {list.description}
           </div>
           <div className='flex justify-between gap-2'>
           
            {list.tag}
           </div>
             </div>
             </>)
            })
        }
        </div>
  )
}

export default FetchList