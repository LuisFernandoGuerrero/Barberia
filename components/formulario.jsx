import React from 'react'

const Formulario = () => {
    return (
        <div className='contacto prostoOneFont'>
            <div className="titulo contenedor ">
                <h3><span>Agenda</span> tu cita</h3>
                <p className="poppinsFont">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ullam ipsum tenetur dolores culpa vero autem, rem perspiciatis fugiat laboriosam dicta libero recusandae. Natus officiis accusamus consequuntur ipsum nesciunt quidem.</p>
            </div>
            <form className='formulario'>
                <div className="datosPrincipales">
                    <input type="text" placeholder='Nombre' />
                    <input type="email" placeholder='Correo Electrónico' />
                    <input type="text" placeholder='Número Celular' />
                    <input type="date" placeholder='Fecha' />
                </div>
                <div className="contenedorMensaje">
                    <textarea name="mensaje" id="mensaje" cols="30" rows="5" className='itemMensaje' placeholder='Deja tu mensaje'></textarea>
                </div>
                <div className="contenedorButton">
                    <input type="button" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default Formulario