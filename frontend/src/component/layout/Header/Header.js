import React from "react";
import ReactNavbar from "../../../lib/ReactNavbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColor:"rgba(200, 200, 200, 0.5)",
  burgerColorHover: "tomato",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  link1AnimationTime:0.5,
  searchIconAnimationTime:0.5,
  logoHoverSize: "10px",
  logoHoverColor: "#DD5746",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconUrl:"/search",
  profileIconUrl:"/login",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
