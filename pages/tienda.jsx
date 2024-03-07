import Layout from '@/Layout/layout'
import TiendaComponent from '@/components/tienda'

const Tienda = () => {
  return (
    <section className='principalTienda'>
      <Layout nombrePagina={'Tienda'}>
        <TiendaComponent />
      </Layout>
    </section>
  )
}

export default Tienda