import { createSlice } from "@reduxjs/toolkit";
const NotesSlice=createSlice({
    name:"Notes",
    initialState:{
        Notes:[
           
        ],
    },
    reducers:{
        addToNotes(state,action){
            state.Notes.push({heading:action.payload,subnotes:[]});
        },
        addToSubNotes(state,action){
            console.log(action.payload.notes.heading)
            const index=state.Notes.findIndex((note)=>note.heading===action.payload.notes.heading);
            console.log(index);
            state.Notes[index].subnotes.push({list:action.payload.text})
        },
        removeNotes(state,action){
            const index=state.Notes.findIndex((note)=>note.heading===action.payload.heading);
            state.Notes.splice(index,1);
        },
        removeSubNotes(state,action){
            const index=action.payload.id;
            const realindex=state.Notes[index].subnotes.findIndex((subnote)=>subnote.list===action.payload.list);
            state.Notes[index].subnotes.splice(realindex,1);


        }







        
       

    }
})

export default NotesSlice.reducer

export const {addToNotes}=NotesSlice.actions;
export const {addToSubNotes}=NotesSlice.actions;
export const {removeNotes}=NotesSlice.actions;
export const {removeSubNotes}=NotesSlice.actions;