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
              <use xlinkHref={`${iconSprite}#icon-home`}></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="/#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${iconSprite}#icon-home`}></use>
            </svg>
            <span>Car Rental</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="/#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${iconSprite}#icon-home`}></use>
            </svg>
            <span>Tours</span>
          </a>
        </li>



      </ul>








    </nav>
  )
}



export default SideBar