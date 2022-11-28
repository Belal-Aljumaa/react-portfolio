import "./header.scss";
import vscode from "/images/vscode_icon.svg";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiSquare } from "react-icons/bi";

const Header = () => {
  return (
    <section className="titlebar">
      <img src={vscode} alt="VSCode Icon" height={15} width={15} />
      <div className="items">
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className="title">Belal Aljumaa - Visual Studio Code</p>
      <div className="windowButtons">
        <span><AiOutlineMinusCircle/></span>
        <span><BiSquare/></span>
        <span><AiOutlineCloseCircle/></span>
      </div>
    </section>
  );
};

export default Header;
