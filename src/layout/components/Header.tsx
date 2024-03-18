import { Button } from "antd";
import "./header.scss";
import logo from "../../assets/image/Logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content-first">
        <img src={logo} alt="" className="header-img" />
        <ul className="menu">
          <li>Home</li>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="header-content-second">
        <Button>Login</Button>
        <Button>Register</Button>
        <Button>Card</Button>
      </div>
    </div>
  );
};

export default Header;
