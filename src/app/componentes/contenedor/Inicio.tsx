import foto1 from "../../../assets/img/Foto1.jpg";
import foto2 from "../../../assets/img/Foto2.jpg";
import foto3 from "../../../assets/img/Foto3.jpg";
export const Inicio = () => {
  return (
    <>
      <div className="bd-example m-0 border-0">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img 
            src={foto1} 
            className="d-block w-100" 
            alt="Foto 1"
            width={1896}
            height={400}/>
        
            </div>
            <div className="carousel-item">
            <img 
            src={foto2} 
            className="d-block w-100" 
            alt="Foto 2"
            width={1896}
            height={400}/>
            
            </div>
            <div className="carousel-item">
            <img 
            src={foto3} 
            className="d-block w-100" 
            alt="Foto 3"
            width={1896}
            height={400}/>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
