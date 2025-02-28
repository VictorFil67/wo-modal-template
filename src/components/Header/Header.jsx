import { useState } from "react";
import BurgerOpen from "../../images/BurgerOpen";
import {
  HeaderAuthButton,
  HeaderButtonBurger,
  HeaderContainer,
  HeaderDivLink,
  HeaderIconUser,
  HeaderLink,
  HeaderUserContainer,
  LogoLink,
  Name,
} from "./Header.Styled";
import Backdrop from "../Backdrop/Backdrop";
import MobileBurger from "../MobileBurger/MobileBurger";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const user = false;

  const handleBurgerOpen = () => {
    setBurgerMenu(!burgerMenu);
    setBackdrop(true);
  };

  const closeModal = () => {
    setBurgerMenu(false);
    setBackdrop(false);
  };

  return (
    <>
      <>
        {backdrop && <Backdrop closeModal={closeModal} />}
        {setBurgerMenu && (
          <>
            <MobileBurger closeModal={closeModal} isOpen={burgerMenu} />
          </>
        )}
      </>
      <HeaderContainer>
        <LogoLink to={"/"}>LOGO</LogoLink>
        <HeaderDivLink>
          <HeaderLink to={"/"} aria-label="Home">
            Home
          </HeaderLink>

          <HeaderLink to={"/products"} aria-label="Products">
            Products
          </HeaderLink>
        </HeaderDivLink>
        {!user ? (
          <HeaderUserContainer>
            <HeaderAuthButton>Log In</HeaderAuthButton>
            <HeaderAuthButton>Registration</HeaderAuthButton>

            <HeaderButtonBurger onClick={handleBurgerOpen}>
              <BurgerOpen />
            </HeaderButtonBurger>
          </HeaderUserContainer>
        ) : (
          <>
            <HeaderUserContainer>
              <HeaderIconUser>
                {/* <span>{firstLetter}</span> */}
                <span>U</span>
              </HeaderIconUser>
              <Name>
                userName
                {/* {userName} */}
              </Name>
              <HeaderAuthButton>Log out</HeaderAuthButton>

              <HeaderButtonBurger onClick={handleBurgerOpen}>
                <BurgerOpen />
              </HeaderButtonBurger>
            </HeaderUserContainer>
          </>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
