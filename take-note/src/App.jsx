import './App.css';
import React from 'react';
import { CreateNote } from './Components/ComponentsApp/CreateNote';
import { Footer } from './Components/ComponentsApp/Footer';
import { WaltNotes } from './Components/ComponentsApp/WaltNotes';


function App() {
  
  return (
    <>
      < WaltNotes />
      < CreateNote/>
      < Footer/>
    </>
  )
}

export default App;
