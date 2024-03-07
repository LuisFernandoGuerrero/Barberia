import Layout from '@/Layout/layout'
import EquipoContenedor from '@/components/equipoContenedor'

export default function Home() {
    return (
        <section className='equipoPrincipal'>
            <Layout
                nombrePagina={'Nuestro Equipo'}
            >
                <EquipoContenedor />
            </Layout>
        </section>
    )
}
