import React from "react"
import "../assets/style/styleWave.css"



export enum COLORBOT {
    WHITE="#FFFFFF"
}

export enum COLORTOT {
    GREEN="green",
    BLUE="blue"
}


interface Props {
    colorBot:COLORBOT
    colorTop:COLORTOT
}

const Wave:React.FC<Props> = ({colorTop,colorBot}) => {


    return (
        <>
        <div className={`header-wave ${colorTop}`}>
            Effet de Vague en CSS
            <svg className="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill={colorBot} fill-opacity="1" 
                    d="M0,128L48,133.3C96,139,192,149,288,160C384,171,480,181,576,181.3C672,181,768,171,864,154.7C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L0,320Z">
                </path>
            </svg>
        </div>
        </>
    )
}

export default Wave