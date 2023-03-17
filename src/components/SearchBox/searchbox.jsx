import React from 'react'
import { useState } from 'react'
import {IoMdAddCircle} from "react-icons/io"
import "./search.css"
import { useDispatch } from 'react-redux'
import { addToNotes } from '../../store/slices/notesSlice'
const Searchbox = () => {
  const dispatch=useDispatch();
  const [Text,setTextvalue]=useState('');
  const addTonotes=(payload)=>{
    dispatch(addToNotes(payload),setTextvalue(''));

  }
  return (
    <div className='search-box-container'>
      <input type="text" value={Text} className='search-box' placeholder='Enter your notes heading' onChange={(event) => setTextvalue(event.target.value)}/>
      <IoMdAddCircle color='white' size={40} className='addnote-button'  onClick={()=>addTonotes(Text)} />
    </div>
  )
}

export default Searchbox
