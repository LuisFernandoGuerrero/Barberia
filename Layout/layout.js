import Head from "next/head"

import Header from "@/components/header"
import Navegacion from "@/components/navegacion"
import Footer from "@/components/footer"

import { Prosto_One, Poppins } from "next/font/google"


const prostoOneInicio = Prosto_One({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-prosto'
})

const poppinsInicio = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '700', '900'],
    variable: ['--font-poppins']
})
const Layout = ({ children, nombrePagina }) => {
    return (
        <>
            <Head>
                <title>Barberia - {nombrePagina}</title>
                <meta name="description" content="Pagina web Barberia" />
                <link rel="icon" href="/maquinilla-de-afeitar.png" sizes="any" />
            </Head>

            <div className={`${prostoOneInicio.variable} ${poppinsInicio.variable}`}>
                <Header />
                {children}
                <Footer />
            </div>

        </>
    )
}

export default Layout