import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get CineGold Membership, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="#">Sign In</NavLink>
              <NavLink to="#">Sign Up</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>CineWave</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink to="home" className="nav-link">
                  HOME
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="about" className="nav-link">
                  ABOUT
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="movie" className="nav-link">
                  MOVIES
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="contact" className="nav-link">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
