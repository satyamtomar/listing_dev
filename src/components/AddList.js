import React, {  useState } from "react";
import ListActions from "../actions/ListActions";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddList = ({fetchLists=()=>{}}) => {
  const [list, setList] = useState({ title: "", description: "", tag: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    let payload={
      ...list
    }
    ListActions.addList(payload,(err,res)=>{
    
      if(err)
      {
toast(err);   
      }
      else
      {
        console.log(res?.statusCode,'hiiih')
        if(res?.statusCode===200)
        {
            console.log(res,'hi' );
    toast('successfully added')
    setList({ title: "", description: "", tag: "" });
    fetchLists();
       
        }
        else
        {
          toast(res?.msg);
        }
      }
     })
    
  };
  const onChange = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
    // toast('added')
  };
  return (
    <>
     <ToastContainer/>
     <div className="flex flex-row justify-center bg-gray-400">
       
       <div className=" my-3 border-2 border-gray-200 shadow-md shadow-cyan-500/100 rounded-lg px-3 py-3 ">
       <div className="flex flex-row justify-center pb-4">
         <h1 className="text-4xl text-gray-200">Add a list</h1>
         </div>
         <div >
         <form>
           <div className="mb-3 flex flex-row justify-between">
               <div className=" mx-auto px-2">
             <label htmlFor="title" className=" text-gray-200 ">
               Title
             </label>
             </div>
             <div className=" pr-2">
             <input
               type="text"
               className=""
               id="title"
               aria-describedby="emailHelp"
               name="title"
               onChange={onChange}
               value={list.title}
               
               required
             />
             </div>
           </div>
           <div className="mb-3 flex flex-row justify-between">
           <div className="mx-auto px-2">
             <label htmlFor="description" className=" text-gray-200 ">
               Description
             </label>
             </div>
             <div className="pr-2">
             <input
               type="text"
               className=""
               id="description"
               name="description"
               onChange={onChange}
               value={list.description}
               
               required
             />
             </div>
           </div>
 
           <div className="mb-3 flex flex-row justify-between">
           <div className="mx-auto px-2">
             <label htmlFor="tag" className=" text-gray-200">
               Tag
             </label>
             </div>
             <div className="pr-2">
             <input
               type="text"
               className=""
               id="tag"
               name="tag"
               value={list.tag}
               onChange={onChange}
               required
             />
             </div>
           </div>
           <div className="flex flex-row justify-center pt-4">
           <button
             type="submit"
             className="btn btn-dark text-gray-200 shadow-md shadow-cyan-500"
             onClick={onSubmit}
           >
             Add list
           </button>
           </div>
         </form>
         </div>
       </div>
     </div></>
   
  );
};

export default AddList;