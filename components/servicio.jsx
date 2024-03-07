import Image from 'next/image'

const Servicio = ({ servicioProp }) => {

    const { nombre, descripcion, url } = servicioProp;

    return (
        <div className='servicio'>
            <div className="imagen">
                <Image
                    src={url}
                    alt="imagen logo"
                    width={180}
                    height={180}
                />
            </div>
            <div className="descServicio poppinsFont">
                <h4>{nombre}</h4>
                <p>{descripcion}</p>
                <button>Ver Más</button>
            </div>
        </div>
    )
}

export default Servicio