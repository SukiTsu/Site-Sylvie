import Banner from "../component/main/Banner"
import Footer from "../component/main/Footer"
import Header from "../component/main/Header"
import NavBarre from "../component/main/NavBarre"
import Wrapper from "../component/main/Wrapper"



const Home =({}) => {

    return(
        <>
            <div id="page-wrapper">
                <Header />
                <Banner />
                <Wrapper />
                <Footer />
            </div>
            <NavBarre />
        </>
    )

}

export default Home