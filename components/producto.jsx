import { formatearDinero } from "@/helpers";
import Image from "next/image";

const Producto = producto => {

    const { nombre, descripcion, precio, image } = producto.producto;

    return (
        <div className='producto'>
            <div className="imagen">
                <Image
                    src={image}
                    alt="imagen producto"
                    width={180}
                    height={180}
                />
            </div>
            <div className="descServicio prostoOneFont">
                <h4>{nombre}</h4>
                <p>{descripcion}</p>
                <p className="precio">${formatearDinero(precio)}</p>
            </div>
        </div>
    )
}

export default Producto