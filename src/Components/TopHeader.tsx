import logo from '../Assets/img/logo.png'
import iconMagnifyingGlass from '../Assets/img/sprite.svg'

const TopHeader = () => {


  return (
    <header className="header">

      <img src={logo} alt='logo' className='logo'/>
      <form action="#" className='search'>
        <input className='search__input' placeholder='Search Hotels'/>
        <button className='search__button'>
          <svg className='search__icon'>
            <use xlinkHref={`${iconMagnifyingGlass}#icon-magnifying-glass`}/>
          </svg>
        </button>
      </form>


    </header>
  )
}

export default TopHeader;