import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {

const [UserData, setUserData] = useState([]);

const [index, setindex] = useState(1);

  const getData = async() =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    console.log(response.data);
    setUserData(response.data);
  }

 useEffect(function(){
    getData();
 },[index]);

  let printUserData = <h3 className='text-gray-400 text-2xl'>Loading...</h3>;

  if(UserData.length > 0){
    printUserData = UserData.map(function(elem,idx){
        return <div key={idx} className='h-40 w-44 p-5 justify-center mb-10'>
            <a href={elem.url} target='_blank' rel="noopener noreferrer"></a>
            <img className='h-40 object-cover' src={elem.download_url} alt="Url" />
            <p className='py-2 text-black text-center text-sm bg-white rounded-xl'>{elem.author}</p>
        </div>
    })
  }

  return (
    <div className='h-screen w-full p-4 bg-gray-900'>
      {/* <button
      onClick={getData}
      className='bg-green-600 px-5 py-2 rounded text-white text-3xl active:scale-90 font-semibold'>Get Data</button> */}
      <div className='flex flex-wrap text-white text-4xl gap-5 justify-center p-5'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-10 py-5 items-center'>
        <button style={{opacity:index == 1 ? 0.5 : 1}} onClick={() =>{if (index > 1) {
          setindex(index - 1)
          setUserData([])
        }}} className='bg-amber-400 text-sm cursor-pointer text-black rounded px-4 py-2 font-semibold tracking-wider active:scale-95'>Prev</button>
        <p className='text-white font-semibold'>Page {index}</p>
        <button style={{opacity:index == 100 ? 0.5 : 1}} onClick={() =>{setindex(index + 1)
          setUserData([])
        }} className='bg-amber-400 text-sm cursor-pointer text-black rounded px-4 py-2 font-semibold tracking-wider active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App
