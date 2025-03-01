import {
  BurgerAuthButton,
  BurgerButtonExit,
  BurgerButtonWraper,
  BurgerContainer,
  BurgerContainerContant,
  BurgerExit,
  BurgerLinkWraper,
  HeaderLink,
} from "./MobileBurger.Styled";
import SvgClose from "../../images/SvgClose";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";
import { useNavigate } from "react-router-dom";
import { logOutThunk } from "../../store/auth/operations";

const MobileBurger = ({ isOpen, closeModal }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <BurgerContainer className={isOpen ? "open" : ""}>
        <BurgerContainerContant>
          <BurgerExit>
            <BurgerButtonExit onClick={closeModal}>
              <SvgClose />
            </BurgerButtonExit>
          </BurgerExit>
          <BurgerLinkWraper>
            <HeaderLink
              to="/"
              aria-label="return to the home page"
              //   style={{ textDecoration: "none" }}
            >
              Home
            </HeaderLink>
            <HeaderLink
              to="/products"
              aria-label="return to the product page"
              //   style={{ textDecoration: "none" }}
            >
              Products
            </HeaderLink>
          </BurgerLinkWraper>

          <BurgerButtonWraper>
            {!user ? (
              <>
                <BurgerAuthButton onClick={() => navigate("/login")}>
                  Log in
                </BurgerAuthButton>
                <BurgerAuthButton onClick={() => navigate("/register")}>
                  Registration
                </BurgerAuthButton>
              </>
            ) : (
              <>
                <BurgerAuthButton onClick={() => dispatch(logOutThunk())}>
                  Log out
                </BurgerAuthButton>
              </>
            )}
          </BurgerButtonWraper>
        </BurgerContainerContant>
      </BurgerContainer>
    </>
  );
};

export default MobileBurger;
