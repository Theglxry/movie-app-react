import logo from '../../assets/icons/Logo.svg';
import searchIcon from '../../assets/icons/Search.svg'
import hamburgerIcon from '../../assets/icons/Menu-alt4.svg';
import './Nav.css';



const Nav = () => {
  return (
    <header className='header-wrapper'>



    <nav className='flex nav-wrapper'>
    {/* Logo */}
    <div className="logo">
          <img src={logo} alt="Logo" /> 
        </div>


       {/* Search Bar */}
       <div className="flex  search-bar">
          <input type="text" placeholder="What do you want to watch ? " />
          <div className="search-icon">
            <img src={searchIcon} alt="Search" />
          </div>
        </div>



       <div className='flex menu'> 
             <div className="sign-in">
             <button>Sign in</button>
             </div>

          <div className="hamburger-menu">
           <img src={hamburgerIcon}/>
          </div>
          </div>
     
    </nav>



  </header>
  )
}

export default Nav