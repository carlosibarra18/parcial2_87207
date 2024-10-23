import foto1 from "../../../assets/img/foto1.png"
import foto2 from "../../../assets/img/foto2.png"
import foto3 from "../../../assets/img/foto3.png"
export const Inicio = () => {
    return (
        <>
         <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ foto1 } className="d-block w-50" alt="foto 1"/>
    </div>
    <div className="carousel-item">
      <img src={ foto2 } className="d-block w-50" alt="foto 2"/>
    </div>
    <div className="carousel-item">
      <img src={ foto3 } className="d-block w-50" alt="foto 3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    );
};