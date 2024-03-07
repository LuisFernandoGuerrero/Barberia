import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import BotonAgendar from './botonAgendar';


const recursoHumano = [
  { id: 1, nombre: "Fernando", cargo: "barbero", foto: '/images/barbero1.png' },
  { id: 2, nombre: "Luis", cargo: "barbero", foto: '/images/barbero1.png' },
  { id: 3, nombre: "Diego", cargo: "barbero", foto: '/images/barbero1.png' },
  { id: 4, nombre: "Carlos", cargo: "barbero", foto: '/images/barbero1.png' },
  { id: 5, nombre: "Camilo", cargo: "barbero", foto: '/images/barbero1.png' },
  { id: 6, nombre: "Juan", cargo: "barbero", foto: '/images/barbero1.png' }
]

const EquipoContenedor = () => {
  return (
    <section className="equipo prostoOneFont">
      <div className="titulo contenedor">
        <h3><span>Nuestro</span> Equipo</h3>
        <p className="poppinsFont">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ullam ipsum tenetur dolores culpa vero autem, rem perspiciatis fugiat laboriosam dicta libero recusandae. Natus officiis accusamus consequuntur ipsum nesciunt quidem.</p>
      </div>
      <Swiper
                autoHeight={true}
                spaceBetween={20}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
        <div>
          {recursoHumano.map(recurso => (
            <SwiperSlide
              key={recurso?.id}
            >
              <div className='recurso prostoOneFont'>
                <div className="imagenRecurso">
                  <Image className='imgRecurso' src={recurso.foto} alt={`barbero ${recurso.nombre}`} width={200} height={200} />
                </div>
                <div className="infoRecurso">
                  <p>{recurso.nombre}</p>
                  <p className='cargo'>{recurso.cargo}</p>
                  <BotonAgendar />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  )
}

export default EquipoContenedor