import "./Dashboard.css";
import logo from "../../assets/icons/Logo.svg";

function Dashboard() {
  return (
    <section className="dashboard-container">
      <div className="content-wrapper">
        <div className="side-menu">
        
          <div className="logo">
            <div className="logo-img">
              <img src={logo} />
            </div>
            <span className="logo-text">MovieBox</span>
          </div>





          <div className="menu-list"></div>

          <div></div>

          <div></div>
        </div>

        <div className="main-content">
          <div className="movie-display"></div>

          <div className="lower-section"></div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
