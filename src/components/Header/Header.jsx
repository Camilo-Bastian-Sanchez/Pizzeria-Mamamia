import "./Header.css";
import headerBg from "../../assets/img/header-bg.jpg";

const Header = () => {
  return (
    <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="header__overlay">
        <h1 className="header__title">¡Pizzería Mamma Mia!</h1>
        <p className="header__description">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </header>
  );
};

export default Header;
