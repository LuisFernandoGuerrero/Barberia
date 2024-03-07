import Layout from '@/Layout/layout'
import Formulario from '@/components/formulario'
import React from 'react'

const Contacto = () => {
  return (
    <section className='contactoPrincipal'>
        <Layout 
        nombrePagina={"Contactanos"}>
            <Formulario />
        </Layout>
    </section>
  )
}

export default Contacto