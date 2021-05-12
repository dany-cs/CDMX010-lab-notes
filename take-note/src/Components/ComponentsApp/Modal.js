import React from 'react'
import { CreateNote } from "./CreateNote"
import '../ComponentsApp/Modal.css';

export const Modal = (props) => {
    return (
        props.open && (
            <div className="nuwNote">
                <div className="takeNote">
                    <button className="close" onClick={props.onClose}>X</button>
                    <CreateNote note={props.note} />

                </div>
            </div>
        )
    )
}