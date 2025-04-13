import React from "react"
import '../assets/style/styleGalerieText.css'

interface Props {
    listImage:string[]
    listText:string[]
    listLink:string[]
}

const GalerieText:React.FC<Props> = ({listImage,listText,listLink}) => {

    let html = []

    for (let i=0;i<listImage.length;i++){
        html.push(
            <a href={listLink[i]} key={listLink[i]}>
                <div className="gallery-text-item">
                    <img src={listImage[i]} alt={listText[i]}/>
                    <div className="overlay">{listText[i]}</div>
                </div>
            </a>
        )
    }

    return(
        <>
            <div className="gallery-text">
                {html}
            </div>
        </>
    )
} 

export default GalerieText