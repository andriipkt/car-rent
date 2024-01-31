import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/car-logo.svg";
import { Suspense } from "react";
import {
  Container,
  Header,
  LogoWrapper,
  StyledLink,
} from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <LogoWrapper>
            <img
              src={logo}
              alt="logo"
              style={{ width: "24px", height: "24px" }}
            />
            <span>Car Rent</span>
          </LogoWrapper>
        </Link>

        <nav>
          <StyledLink to={"/"}>Home</StyledLink>
          <StyledLink to={"/catalog"}>catalog</StyledLink>
          <StyledLink to={"/favorites"}>favorites</StyledLink>
        </nav>
      </Header>

      <Container>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
