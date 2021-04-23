import React, { useState, useEffect } from 'react';
import { collectionNotes, deleteNotes, editNotes } from '../../firebase/FirebaseConfig';
import '../ComponentsApp/WaltNotes.css';

export const WaltNotes = () => {
    const [createN, setCreate] = useState([])

    useEffect(() => {
        const getNotes = async () => {
            const { docs } = await collectionNotes
            const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setCreate(newArray)
        }
        getNotes()
    }, [])

    const NotesDelete = async (id) => {
        try{
            await deleteNotes (id)
            const { docs } = await collectionNotes  
            const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setCreate(newArray)
        } catch (e){
            e('No se elimino tu nota ')

        }
    }
    
    const NotesEdit = async (id) => {
      try{
       const data = await editNotes(id)
        const {title, notes} = data.data();
            console.log(title);
            console.log(notes);
      }  catch(e){
          console.log(e)
          
      }
    }

    return (
        <>
            <h1>Tus notas</h1>
            <div >
                <ul >
                    {
                        createN.length !== 0 ? (
                            createN.map(item => (
                                <div className="dadNote" key={item.id}>
                                    <h3>{item.title}</h3>
                                    <p>{item.notes}</p>
                                    <button onClick = {(id) => {NotesDelete(item.id)}}>Borrar</button>
                                    <button onClick = {(id) => {NotesEdit(item.id)}}>Editar</button>
                                    
                                </div>
                            ))
                        )
                            :
                            (
                                <span>No existen notas</span>
                            )
                    }
                </ul>
            </div>
        </>
    )
}