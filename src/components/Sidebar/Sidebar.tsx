import { VscFiles } from "react-icons/vsc";
import { VscGithubAlt } from "react-icons/vsc";
import { VscCode } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";
import { GoBeaker } from "react-icons/go";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="topIcons">
        <NavLink to="/home" data-title="Home Page" className="link">
          <VscFiles className="icon" />
        </NavLink>
        <NavLink to="/github" data-title="My Github Account" className="link">
          <VscGithubAlt className="icon" />
        </NavLink>
        <NavLink to="/projects" data-title="My Projects" className="link">
          <VscCode className="icon" />
        </NavLink>
        <NavLink to="/skills" data-title="Skills" className="link">
          <VscExtensions className="icon" />
        </NavLink>
        <NavLink to="/certificates" data-title="Certificats" className="link">
          <GoBeaker className="icon" />
        </NavLink>
        <NavLink to="/contact" data-title="Contact me" className="link">
          <VscMail className="icon" />
        </NavLink>
      </div>

      <div>
        <NavLink to="/about" className="link" data-title="About me">
          <VscAccount className="icon" />
        </NavLink>
        <NavLink to="/settings" data-title="Settings" className="link">
          <VscSettingsGear className="icon" />
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
