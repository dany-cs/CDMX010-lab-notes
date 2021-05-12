import React, { useState } from 'react';
import '../ComponentsApp/CreateNote.css'
import { db } from '../../firebase/FirebaseConfig';

export const CreateNote = (props) => {
    const [title, setTitle] = useState(props.note ? props.note.title : "");
    const [notes, setNotes] = useState(props.note ? props.note.notes : "");

    const setCreates = async (e) => {
            if (props.note) {
              const create = {  
                title: title,
                notes: notes,
              };
              try {
                await db.doc(`notas/${props.note.id}`).update(create);
                console.log('nota añadida');
          
              } catch (e) {
                console.log('nota no creada', e);
              }
              db.collection("notas");
            }else {
              const writeNotes = {
                title: title,
                notes: notes,
              };
              try {
                await db.collection("notas").add(writeNotes);
              }catch (e) {
                console.log(e);
              }
            }   
          };
    
    

    return (
            <div>
                <form onSubmit={setCreates} className="formNote">
                    <div className="fNote">
                    <input value={title} onChange={(e) => { setTitle(e.target.value) }}
                        type="text"
                        placeholder="Titulo..."></input>{" "}
                    <textarea value={notes} onChange={(e) => { setNotes(e.target.value) }}
                        placeholder="Escribe tu nota..."></textarea>
                        </div>
                    <button className="buttonNote" type="submit">Guardar</button>
                   
                </form>
                
            </div>
    )
}
