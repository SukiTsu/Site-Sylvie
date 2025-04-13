import React from "react"
import BoxWrapper from "./main/BoxWrapper"
import NavBarre from "./main/NavBarre"
import Footer from "./main/Footer"
import Banner from "./main/Banner"
import Header from "./main/Header"

interface Props {
    img:string
    title:string
    content:string
}

const ContainerPageDescription:React.FC<Props> = ({img,title,content}) => {

    return(
        <>
        <Header />
        <NavBarre />
        <Banner />
        <section id="wrapper">
            <BoxWrapper content={content} link={null} title={title} img={img} nb={1} key={title}/>
        </section>
        <Footer />
        </>
    )
}

export default ContainerPageDescription