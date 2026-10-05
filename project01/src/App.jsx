import React from 'react'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()
    // console.log("Form Submitted");
    console.log(e.target.value);
    
    
  }
  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='p-10 flex flex-col gap-5 items-start lg:w-1/2'>
          <h1 className='text-3xl font-extrabold font-sans'>Add Notes</h1>
          <input className='px-5 py-3 border-3 rounded-md text-white font-medium w-full outline-none' type="text" placeholder='Enter Notes Heading' />
          <textarea className='px-5 py-2 h-35 border-3 rounded-md w-full outline-none text-white font-medium' placeholder='Write Details' name="" id=""></textarea>
          <button className='bg-white text-black px-5 py-2 rounded-md text-2xl font-semibold w-full'>Add Note</button>
      </form>

      <div className='p-10 bg-gray-600 lg:w-1/2 gap-5 overflow-auto lg:border-l-3 '>
      <h1 className='text-3xl font-bold'>Your Notes : </h1>
        <div className='flex flex-wrap gap-5 mt-5'>
          <div className="h-55 w-40 rounded-2xl bg-white"></div>
          <div className="h-55 w-40 rounded-2xl bg-white"></div>
          <div className="h-55 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default App
