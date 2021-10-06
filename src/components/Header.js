function Header() {
  return (
    <header>
      <a className="logo" href="#">
        <span>BC</span>
      </a>

      <div className="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="nav-menu">
        <div className="nav-menu--links">
          <a className="nav-menu--link link--active" href="#home">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </a>
          <a className="nav-menu--link" href="#about">
            <i className="fas fa-user"></i>
            <span>About</span>
          </a>
          <a className="nav-menu--link" href="#resume">
            <i className="fas fa-address-card"></i>
            <span>Resume</span>
          </a>
          <a className="nav-menu--link" href="#portfolio">
            <i className="fas fa-briefcase"></i>
            <span>Portfolio</span>
          </a>
          <a className="nav-menu--link" href="#blog">
            <i className="fas fa-book"></i>
            <span>Blog</span>
          </a>
          <a className="nav-menu--link" href="#contact">
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </a>
        </div>

        <div className="social-links">
          <a className="social-link" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="social-link" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="social-link" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="social-link" href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <div className="copy">
          <p>Copyright &copy; 2019 Clarks, All rights Reserved.</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
