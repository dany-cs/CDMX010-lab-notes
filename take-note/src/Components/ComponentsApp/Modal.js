import React from 'react'
import { CreateNote } from "./CreateNote"
import '../ComponentsApp/Modal.css';

export const Modal = (props) => {
    return (
        props.open && (
            <div className="nuwNote">
                <div className="takeNote">
                    <button onClick={props.onClose}>cerrar</button>
                    <CreateNote note={props.note} />

                </div>
            </div>
        )
    )
}