import React from 'react'
import "./notescard.css"
import { useSelector } from 'react-redux'
import SubnoteInput from '../SubnoteInput/SubnoteInput'
import {BsCheckCircle} from "react-icons/bs"
import { removeNotes } from '../../store/slices/notesSlice'
import { useDispatch } from 'react-redux'
import {RiDeleteBin6Line} from "react-icons/ri"
import { removeSubNotes } from '../../store/slices/notesSlice'
const NotesCard = ({notes,id}) => {
    const {heading}=notes;
    const {subnotes}=notes;
    const dispatch=useDispatch();
//     const notes=useSelector((state)=>{return state.notes.Notes} )
    const removenote=(payload)=>{
        dispatch(removeNotes(payload),console.log(id))
    }
    const removesubnotes=(payload)=>{
        dispatch(removeSubNotes(payload))
    }
  return (
    <div className='notescard-container'>
        <div className='heading'>
            <h1>{heading}</h1>
            <RiDeleteBin6Line className='check-icon' size={30} onClick={()=>removenote(notes)} />
            

        </div>
        <div className='notes-space'>
            <div className='input-subnote'>
                <SubnoteInput notes={notes}/>
            </div>

            {subnotes.map((note,ID)=>{
                return(
                    <>
                    <div className="sublist">
                    <h1 style={{fontSize:"17px" }}  className="list-wall">{ID+1})   {note.list}</h1>
                    <BsCheckCircle className='dustbin-icon' onClick={()=>removesubnotes({id:id,list:note.list})}/>
                    </div> 
                    {/* RiDeleteBin6Line
                    sCheckCircle */}
                    </>
                )
            })}

        </div>

      
    </div>
  )
}

export default NotesCard
