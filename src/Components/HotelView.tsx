import image1 from '../Assets/img/hotel-1.jpg'
import image2 from '../Assets/img/hotel-2.jpg'
import image3 from '../Assets/img/hotel-3.jpg'
import iconSprite from '../Assets/img/sprite.svg'


const HotelView = () => {


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

      <div className='Overview'>
        <h1 className='Overview__Heading'>
          Hotel Las Palmas
        </h1>

        <div className='Overview__Stars'>

          <svg className='Overview__icon'>
            <use xlinkHref={`${iconSprite}#icon-star`}></use>
          </svg>

          <svg className='Overview__icon'>
            <use xlinkHref={`${iconSprite}#icon-star`}></use>
          </svg>

          <svg className='Overview__icon'>
            <use xlinkHref={`${iconSprite}#icon-star`}></use>
          </svg>

          <svg className='Overview__icon'>
            <use xlinkHref={`${iconSprite}#icon-star`}></use>
          </svg>

          <svg className='Overview__icon'>
            <use xlinkHref={`${iconSprite}#icon-star`}></use>
          </svg>

        </div>
      </div>

      <div className='Overview__Location'>
       <svg className='Overview__icon'>
          <use xlinkHref={`${iconSprite}#icon-location-pin`}></use>
        </svg>
          <button className='btn-inline'> </button>
      </div>

    </main>
  )
}



export default HotelView;
