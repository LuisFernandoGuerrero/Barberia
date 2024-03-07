import Layout from '@/Layout/layout'
import PreciosContenedor from '@/components/preciosContenedor'

export default function Home() {
  return (
    <section className='preciosPrincipal'>
      <Layout nombrePagina={'Precios'}>
        <PreciosContenedor />
      </Layout>
    </section>
  )
}
