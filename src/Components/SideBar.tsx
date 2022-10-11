import iconSprite from '../Assets/img/sprite.svg'


const SideBar = (props: any) => {


  return(
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <a href="/#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${iconSprite}#icon-home`}></use>
            </svg>
            <span>Hotel</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="/#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${iconSprite}#icon-aircraft-take-off`}></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="/#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${iconSprite}#icon-key`}></use>
            </svg>
            <span>Car Rental</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="/#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${iconSprite}#icon-map`}></use>
            </svg>
            <span>Tours</span>
          </a>
        </li>


          <div className='legal'>
            &copy; 2017 by Trillo. All rights reserved.
          </div>
      </ul>








    </nav>
  )
}



export default SideBar