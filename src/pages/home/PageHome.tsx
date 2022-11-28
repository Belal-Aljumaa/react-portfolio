import { Link } from "react-router-dom";
import "./PageHome.scss";

const PageHome = () => {
  return (
    <div className="home">
      <div className="main-container">
        <div className="background">
          <h2>I BUILD</h2>
          <h2>WEBSITES</h2>
        </div>
        <div className="foreground">
          <div>
            <h2 className="name">Belal Aljumaa</h2>
            <h4 className="bio">
              <div className="content">
                <div className="flip">
                  <b>Full Stack</b>
                  <b>MERN Stack</b>
                </div>
              </div>
              <span>Web Developer</span>
            </h4>
            <Link to="/projects">
              <button className="button">View Work</button>
            </Link>
            <Link to="/contact">
              <button className="outlined">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageHome;
