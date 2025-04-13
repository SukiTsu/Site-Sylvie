import "../assets/style/styleGalerie.css";

interface Props{
    img1:string
    img2:string
    txt:string
    img3:string
}

const Gallery:React.FC<Props> =({img1,img2,txt,img3}) => {

    return (
        <>
        
        <div className="gallery">
            <img src={img1} alt={img1} className="image" />
            <div className="text">{txt}</div>
            <img src={img2} alt={img2} className="image"/>
            <img src={img3} alt={img3} className="image"/>
        </div>
        
      </>
    );
  };

export default Gallery;
