import logo from '../Assets/img/logo.png'

const TopHeader = () => {


  return (
    <header className="header">

      <img src={logo} alt='logo' className='logo'/>
      <form action="#" className='search'>
        <input className='search__input' placeholder='Search Hotels'/>
        <button className='search__button'>
          Search
        </button>
      </form>


    </header>
  )
}

export default TopHeader;