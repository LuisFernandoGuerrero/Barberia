import BotonAgendar from "./botonAgendar"

const PreciosContenedor = () => {
    return (
        <section className="precios prostoOneFont">
            <div className="imagenPrecios">
                <div className="layout"></div>
            </div>
            <div className="listadoPrecios">
                <div className="titulo">
                    <h3>Listado <span>precios</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore soluta facilis incidunt in doloribus blanditiis.</p>
                </div>
                <ul>
                    <li><p>Corte clasico</p><p>$20.000</p></li>
                    <li><p>Corte clasico</p><p>$20.000</p></li>
                    <li><p>Corte clasico</p><p>$20.000</p></li>
                    <li><p>Corte clasico</p><p>$20.000</p></li>
                    <li><p>Corte clasico</p><p>$20.000</p></li>
                </ul>
                <BotonAgendar />
            </div>
        </section>
    )
}

export default PreciosContenedor