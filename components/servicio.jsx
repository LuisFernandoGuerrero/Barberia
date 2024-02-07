import Image from 'next/image'

const Servicio = ({ servicios }) => {

    return (
        <div className='contenedorServicios'>
            {
                servicios.map(servicio => (
                    <div className="servicio">
                        <div className="imagen">
                            <Image
                                src={servicio.url}
                                alt="imagen logo"
                                width={180}
                                height={180}
                            />
                        </div>
                        <div className="descServicio poppinsFont">
                            <h4>{servicio.nombre}</h4>
                            <p>{servicio.descripcion}</p>
                            <button>Ver Más</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Servicio