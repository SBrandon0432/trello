import logo from '../Assets/img/logo.png'
import iconSprite from '../Assets/img/sprite.svg'
import userPhoto from '../Assets/img/user.jpg';


const TopHeader = (props: any) => {


  return (
    <header className="header">

      <img src={logo} alt='logo' className='logo'/>
      <form action="#" className='search'>
        <input className='search__input' placeholder='Search Hotels'/>
        <button className='search__button'>
          <svg className='search__icon'>
            <use xlinkHref={`${iconSprite}#icon-magnifying-glass`}/>
          </svg>
        </button>
      </form>

      <nav className='user-nav'>

        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
            <use xlinkHref={`${iconSprite}#icon-bookmark`}/>
          </svg>
          <span className='user-nav__notification'>7</span>
        </div>

        <div className='user-nav__icon-box'>

          <svg className='user-nav__icon'>
            <use xlinkHref={`${iconSprite}#icon-chat`}/>
          </svg>
          <span className='user-nav__notification'>14</span>

        </div>
        <div className='user-nav__user'>
          <img className='user-nav__user-photo' src={userPhoto} alt='user profile pic'/>
          <span className='user-nav__user-name' >Jonas</span>
        </div>
      </nav>

    </header>
  )
}

export default TopHeader;