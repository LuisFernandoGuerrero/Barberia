import Producto from "./producto"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const productos = [
    { id: 1, nombre: "loción barba", descripcion: "Try the set of facial and hair", precio: '20000', image: '/images/corte.png' },
    { id: 2, nombre: "loción barba 2", descripcion: "Try the set of facial and hair", precio: '20000', image: '/images/corte.png' },
    { id: 3, nombre: "loción barba 3", descripcion: "Try the set of facial and hair", precio: '20000', image: '/images/corte.png' },
    { id: 4, nombre: "loción barba 4", descripcion: "Try the set of facial and hair", precio: '20000', image: '/images/corte.png' },
    { id: 5, nombre: "loción barba 5", descripcion: "Try the set of facial and hair", precio: '20000', image: '/images/corte.png' },
    { id: 6, nombre: "loción barba 6", descripcion: "Try the set of facial and hair", precio: '20000', image: '/images/corte.png' },
    { id: 7, nombre: "loción barba 7", descripcion: "Try the set of facial and hair", precio: '20000', image: '/images/corte.png' },
]

const TiendaComponent = () => {
    return (
        <section className="productos prostoOneFont">
            <div className="titulo contenedor">
                <h3><span>compra</span> tus regalos</h3>
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
                    {productos.map(producto => (
                        <SwiperSlide
                            key={producto?.id}
                        >
                            <Producto
                                key={producto?.id}
                                producto={producto}
                            />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </section>
    )
}

export default TiendaComponent