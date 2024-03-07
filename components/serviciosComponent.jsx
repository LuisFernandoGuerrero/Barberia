import Servicio from "./servicio"

const servicios = [
    { id: 1, nombre: 'Corte', descripcion: 'Prueba el combo de barba y capilar', url: '/images/corte.png' },
    { id: 2, nombre: 'Corte Pelo', descripcion: 'Solo hazte un corte de pelo para hombre y mujer', url: '/images/corte.png' },
    { id: 3, nombre: 'Afeitado', descripcion: 'Afeita tu barba y bigote al mejor precio', url: '/images/corte.png' },
    { id: 4, nombre: 'Peinado', descripcion: 'Dale un estilo especial a tu pelo al mejor precio', url: '/images/corte.png' }
]

const ServiciosComponents = () => {
    return (
        <section className="servicios prostoOneFont">
            <div className="titulo contenedor">
                <h3><span>servicios</span> más allá de lo esperado</h3>
                <p className="poppinsFont">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ullam ipsum tenetur dolores culpa vero autem, rem perspiciatis fugiat laboriosam dicta libero recusandae. Natus officiis accusamus consequuntur ipsum nesciunt quidem.</p>
            </div>
            <div className="listadoServicios">
                <div className='contenedorServicios'>
                    {servicios.map(servicio => (
                        <Servicio
                            key={servicio.id}
                            servicioProp={servicio}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ServiciosComponents