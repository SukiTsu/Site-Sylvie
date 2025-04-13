import React from "react"
import "../assets/style/styleContainerPage.css"

interface Props{
    img:string
    titre:string
    content:string
    isBox:boolean
}

/**
 * Container pour des pages, avec image et texte
 * @param param0 
 * @returns 
 */
const ContainerPage:React.FC<Props> = ({img,titre,content,isBox=true}) => {

    let divBox = ""
    if (isBox){
        divBox = "visible"
    }
    return(
        <>
            <div className={`container-page ${divBox}`}>
                <div className="image-section">
                    <img src={img} alt={img} />
                </div>
                <div className="text-section">
                    <h1>{titre}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}

export default ContainerPage