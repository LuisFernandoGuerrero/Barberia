import { useRouter } from 'next/router'

const paginaContacto = { pagina: 6, nombre: 'Solicita tu Cita', url: '/contacto' }

const BotonAgendar = () => {
  const router = useRouter();

  return (
    <a onClick={() => {router.push(paginaContacto.url)}} className="botonAgendar">{paginaContacto.nombre}</a>
  )
}

export default BotonAgendar