import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToSubNotes } from '../../store/slices/notesSlice';
import {IoMdAddCircle} from "react-icons/io"
import "./subnoteinput.css"
const SubnoteInput = ({notes}) => {
    const dispatch=useDispatch();
  const [Text,setTextvalue]=useState('');
  const addtosubnotes=(payload)=>{
    dispatch(addToSubNotes(payload),setTextvalue(''));


  }
  return (
         <div className='input-box-container'>
      <input type="text" value={Text} className='input' placeholder='ADD SUBNOTES' onChange={(event) => setTextvalue(event.target.value)}/>
      <IoMdAddCircle size={30} color={"blue"} onClick={()=>addtosubnotes({text:Text,notes:notes})} />
    </div>
  )
}

export default SubnoteInput
