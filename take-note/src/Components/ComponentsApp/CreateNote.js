import React, { useState } from 'react';
import '../ComponentsApp/CreateNote.css';
import { setCollection } from '../../firebase/FirebaseConfig';

export const CreateNote = () => {
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState('');

    const setCreates = async (e) => {
        e.preventDefault()
        if (!title.trim()) {
            setError('La nota no tiene un titulo')
        }
        if (!notes.trim()) {
            setError('La nota no tiene contenido')
        }
        setCollection(title, notes)
        setTitle('');
        setNotes('');

    }
    

    return (
        <div id="nuwNote" className="nuwNote">
            <div className="takeNote">
                <a href="#">X</a>
                <form onSubmit={setCreates} className="formNote">
                    <div className="fNote">
                    <input value={title} onChange={(e) => { setTitle(e.target.value) }}
                        type="text"
                        placeholder="Titulo..." />
                    <textarea value={notes} onChange={(e) => { setNotes(e.target.value) }}
                        placeholder="Escribe tu nota..." />
                        </div>
                    <button className="buttonNote" type="submit">Crear Nota</button>
                </form>
                {
                    error ?
                        (<div>
                            <p>{error}</p>
                        </div>
                        )
                        :
                        (
                            <span></span>
                        )
                }
            </div>

        </div>
    )
}
