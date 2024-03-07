import Layout from "@/Layout/layout"
import ServiciosComponents from "@/components/serviciosComponent"

const Servicios = () => {
  return (
    <section className="serviciosPrincipal">
      <Layout nombrePagina={'Servicios'}>
        <ServiciosComponents />
      </Layout>
    </section>
  )
}

export default Servicios