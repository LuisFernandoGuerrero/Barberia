import Layout from '@/Layout/layout'
import BotonAgendar from '@/components/botonAgendar'
import Image from 'next/image'
import ServiciosComponents from '@/components/serviciosComponent'
import Video from '@/components/video'

export default function Home() {
  return (
    <Layout
      nombrePagina={'Inicio'}
    >
      <section className='prostoOneFont inicio'>
        <div className='inicioContenedor contenedor'>
          <div className='contenedor titulo'>
            <h1>siente tu nuevo<br /><span>estilo especial</span></h1>
            <p className='poppinsFont'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quam nemo, quibusdam cupiditate cum accusantium eveniet esse. Libero ad culpa earum, nemo tempore quaerat maxime tempora officia dolor pariatur molestiae? Praesentium.</p>
            <BotonAgendar />
          </div>

          <div className='imagen'>
            <Image
              src={`/images/corteLayout1.png`}
              alt="imagen logo"
              width={780}
              height={780}
              className='imagenLayout'
            />
          </div>
        </div>
      </section>
      <ServiciosComponents />
      <Video />
    </Layout>
  )
}
