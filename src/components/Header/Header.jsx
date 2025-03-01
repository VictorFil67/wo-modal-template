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
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";
import { useNavigate } from "react-router-dom";
import { logOutThunk } from "../../store/auth/operations";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const user = useSelector(selectUser);
  const userName = user && user.name;
  const firstLetter = user && user.name ? user.name.charAt(0) : "";

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
            <HeaderAuthButton onClick={() => navigate("/login")}>
              Log In
            </HeaderAuthButton>
            <HeaderAuthButton onClick={() => navigate("/register")}>
              Registration
            </HeaderAuthButton>

            <HeaderButtonBurger onClick={handleBurgerOpen}>
              <BurgerOpen />
            </HeaderButtonBurger>
          </HeaderUserContainer>
        ) : (
          <>
            <HeaderUserContainer>
              <HeaderIconUser>
                <span>{firstLetter}</span>
              </HeaderIconUser>
              <Name>{userName}</Name>
              <HeaderAuthButton onClick={() => dispatch(logOutThunk())}>
                Log out
              </HeaderAuthButton>

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
