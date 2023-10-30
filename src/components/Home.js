import React,{useEffect, useState} from 'react'
import ListActions from '../actions/ListActions'

import { ToastContainer, toast } from 'react-toastify';
import AddList from './AddList'
import FetchList from './FetchList';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const [lists,setLists]=useState([])
    const fetchLists = async () => {
 
      ListActions.myLists((err,res)=>{
    
          if(err)
          {
    toast(err);   
          }
          else
          {

            console.log(res?.statusCode,'hiiih')
            if(res?.statusCode===200)
            {
            setLists(res?.data?.list); 
            
            }
            else
            {
              toast(res?.msg);
            }
          }
         })
        
      };

 useEffect(() => {
fetchLists();
 }, [])
 
  return (
    <div className="main_container bg-gray-400 h-full">
<ToastContainer/>
<h1 className=' text-4xl'>Todolist</h1>
 <AddList fetchLists={fetchLists} />

 <FetchList lists={lists}/>
</div>
  )
}

export default Home