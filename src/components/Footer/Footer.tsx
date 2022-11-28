import { BiGitBranch } from "react-icons/bi";
import { AiOutlineWarning } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import { BsCheck2All } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="box-item">
        <a
          href="https://github.com/Belal-Aljumaa"
          target="_blank"
          className="box-content"
        >
          <BiGitBranch className="footer-icon" />
          <p>main</p>
        </a>
        <div className="box-content">
          <AiOutlineCloseCircle className="footer-icon" />
          <p>0</p>&nbsp;&nbsp;
          <AiOutlineWarning className="footer-icon" />
          <p>0</p>
        </div>
      </div>
      <div className="box-item">
        <div className="box-content">
          <BiCodeCurly className="footer-icon" />
          <p>TypeScript React</p>
        </div>
        <div className="box-content">
          <BsCheck2All className="footer-icon" />
          <p>Prettier</p>
        </div>
        <div className="box-content">
          <VscBellDot />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
