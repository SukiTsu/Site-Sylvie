import React from "react"

interface Props{
    nb:number
    img:string
    title:string
    content:string
    link:string | null
}

const BoxWrapper:React.FC<Props> = ({nb,img,title,content,link}) => {

    return(
        <>
        <section id={`${nb}`} key={nb} className={`wrapper ${nb%2 ? "": "alt"} spotlight style${nb}`}>
            <div className="inner">
                <a href="#" className="image"><img src={img} alt={img} /></a>
                <div className="content">
                    <h2 className="major">{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: content }} />

                    <p>{link!= null ? "..." : ""}</p>
                    {link!= null ? <a href={link} className="special">En lire plus</a> : ""}
                </div>
            </div>
        </section>
        </>
    )
}

export default BoxWrapper