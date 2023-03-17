import logo from './logo.svg';
import './App.css';
import Searchbox from './components/SearchBox/searchbox';
import NotesCard from './components/NotesCard/NotesCard';
import { useSelector } from 'react-redux';

function App() {
  const notes=useSelector((state)=>{return state.notes.Notes} )
  return (
    <>
    <Searchbox/>
    <div className='notes-main-container'>
    {notes.map((note,id)=><NotesCard notes={note} id={id}  />)}
    </div>
    </>
    

  );
}

export default App;
