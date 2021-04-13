import React from 'react'

export const CreateNote = () => {
    return (
        <div id="principal" className="principal">
            <div className="secundario">
                <a href="#">X</a>
                <input type="text" placeholder="Titulo..."></input>
                <textarea placeholder="Escribe tu nota..."></textarea>
                <button>Crear Nota</button>
            </div>
        </div>
    )
}
