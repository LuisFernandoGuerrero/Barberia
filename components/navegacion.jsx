import { useRouter } from 'next/router'
import BotonAgendar from './botonAgendar'

const paginas = [
    { pagina: 1, nombre: 'Inicio', url: '/' },
    { pagina: 2, nombre: 'Servicios', url: '/servicios' },
    { pagina: 3, nombre: 'Tienda', url: '/tienda' },
    { pagina: 4, nombre: 'Precios', url: '/precios' },
    { pagina: 5, nombre: 'Equipo', url: '/equipo' },
    { pagina: 6, nombre: 'Clientes', url: '/clientes' }
]

const Navegacion = () => {
    const router = useRouter();

    return (
        <nav className='navegacion'>
            <ul>
                {paginas.map(pagina => (
                    <li key={pagina.pagina}>
                        <a onClick={() => {router.push(pagina.url)}}>{pagina.nombre}</a>
                    </li>
                ))}
                <BotonAgendar />
            </ul>
        </nav>
    )
}

export default Navegacion