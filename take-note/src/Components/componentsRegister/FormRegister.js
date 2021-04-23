import React from 'react';
import '../componentsRegister/FormRegister.css';
import logoform from '../../image/logoform.png';
import register from '../../image/register.png';
export const FormRegister = () => {
    return (
        <div className="register">
            <img className="logoform" src={logoform}></img>
            <h1>Registrate!</h1>
            <div className="formDad">
                <img className="registerimg" src={register}/>
                <form className="formChildren">
                    <input type="text" placeholder="Nombre"></input>
                    <input type="text" placeholder="Correo electronico"></input>
                    <input type="pasword" placeholder="Contraseña"></input>
                    <button className="buttonForm">Registrarme</button>
                </form>
            </div>
        </div>

    )
}