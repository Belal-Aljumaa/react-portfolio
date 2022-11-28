import { NavLink } from "react-router-dom";
import react from "/images/react_icon.svg";
import html from "/images/html_icon.svg";
import css from "/images/css_icon.svg";
import js from "/images/js_icon.svg";
import markdown from "/images/markdown_icon.svg";
import python from "/images/python_icon.svg";
import picture from "/images/picture_icon.svg";
import "./tabsbar.scss";

const Tabsbar = () => {
  return (
    <div className="tabs">
      <NavLink to="/home" className="tab">
        <img src={react} height={18} width={18} />
        <p>home.tsx</p>
      </NavLink>
      <NavLink to="/about" className="tab">
        <img src={html} height={18} width={18} />
        <p>about.html</p>
      </NavLink>
      <NavLink to="/contact" className="tab">
        <img src={css} height={18} width={18} />
        <p>contact.css</p>
      </NavLink>
      <NavLink to="/projects" className="tab">
        <img src={js} height={18} width={18} />
        <p>projects.js</p>
      </NavLink>
      <NavLink to="/github" className="tab">
        <img src={markdown} height={18} width={18} />
        <p>github.md</p>
      </NavLink>
      <NavLink to="/skills" className="tab">
        <img src={python} height={18} width={18} />
        <p>skills.py</p>
      </NavLink>
      <NavLink to="/certificates" className="tab">
        <img src={picture} height={18} width={18} />
        <p>certificates.png</p>
      </NavLink>
    </div>
  );
};

export default Tabsbar;
