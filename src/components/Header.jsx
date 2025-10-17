const Header = () => {
  return (
    <div className="header">
      {/* logo */}

      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCagRLYkLeTBEd0qc-6FLb6lnyxJXaBw_Fw&s"
          height={60}
        />
      </div>

      {/* nav items */}

      <div className="nav-items">
        <ul className="nav-menu-items">
          <li>
            {" "}
            <a href="">Home</a>
          </li>
          <li>
            {" "}
            <a href="">Services</a>
          </li>
          <li>
            {" "}
            <a href="">Contact us</a>
          </li>
          <li>
            {" "}
            <a href="">Your cart</a>
          </li>
        </ul>
      </div>

      <div className="profile">
        <h3>My Profile</h3>
      </div>
    </div>
  );
};


export default Header;