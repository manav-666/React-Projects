import React, { useState } from 'react'
import {RiCloseCircleLine} from '@remixicon/react'
const App = () => {
  const [title, setTitle] = useState('');

  const [details, setDetails] = useState('');

  const [task, setTask] = useState([]);
  

  const submitHandler = (e) =>{
    e.preventDefault()
    // console.log("Form Submitted");
    // console.log(title);
    // console.log(details);
    const copyTask = [...task];

    copyTask.push({title,details})

    setTask(copyTask);
    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) =>{
      const copyTask = [...task];
      console.log(copyTask);    
      console.log(idx);

      copyTask.splice(idx,1);

      setTask(copyTask);
      
    }

  return (
    <div className='h-screen bg-black text-white lg:flex'>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='p-10 flex flex-col gap-5 items-start lg:w-1/2'>
          <h1 className='text-3xl font-extrabold font-sans'>Add Notes</h1>
          <input className='px-5 py-3 border-3 rounded-md text-white font-medium w-full outline-none' type="text" placeholder='Enter Notes Heading'
          value={title}
          onChange={(elem) => {
            setTitle(elem.target.value)
          }}/>
          <textarea className='px-5 py-2 h-35 border-3 rounded-md w-full outline-none text-white font-medium' placeholder='Write Details' name="" id="" value={details} onChange={(e)=>{
            setDetails(e.target.value)
          }}/>
          <button className='bg-white text-black px-5 py-2 rounded-md text-2xl font-semibold w-full active:scale-95'>Add Note</button>
      </form>

      <div className='p-10 bg-gray-600 lg:w-1/2 gap-5 overflow-auto lg:border-l-3 '>
      <h1 className='text-3xl font-bold'>Recent Notes : </h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className="relative Note bg-cover h-65 w-60 rounded-xl bg-amber-100 text-black p-4 overflow-auto flex justify-between flex-col">
              <div className="">
                <h3 className='Heading leading-tight text-2xl font-bold font-sans mb-3'>{elem.title}</h3>
                <p className='leading-tight text-xl'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className="bg-red-600 text-center p-1 rounded-md text-white font-medium active:scale-95 cursor-pointer ">Delete Note</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
