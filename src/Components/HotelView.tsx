import image1 from '../Assets/img/hotel-1.jpg'
import image2 from '../Assets/img/hotel-2.jpg'
import image3 from '../Assets/img/hotel-3.jpg'


const Main = () => {


  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item" >
          <img src={image1} className = "gallery__photo"  alt ='hotel1'/>
        </figure>

        <figure className="gallery__item" >
          <img src={image2} className = "gallery__photo" alt ='hotel2'/>
        </figure>

        <figure className="gallery__item">
          <img src={image3} className = "gallery__photo"  alt ='hotel3'/>
        </figure>

      </div>

    </main>
  )
}



export default Main;
