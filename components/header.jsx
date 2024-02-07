import Image from "next/image"
import Navegacion from "./navegacion"

const Header = () => {
  return (
    <header className='header contenedor poppinsFont'>
      <div className="logo">
        <Image
          src={`/images/mibarberia.png`}
          alt="imagen logo"
          width={70}
          height={40}
        />
        <h2>Mi Barberia</h2>
      </div>
      <Navegacion /> 
    </header>
  )
}

export default Header