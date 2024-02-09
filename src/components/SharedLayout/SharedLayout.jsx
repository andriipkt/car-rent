import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  Header,
  LogoWrapper,
  Section,
  StyledLink,
} from './SharedLayout.styled';
import ToTopBtn from 'components/ToTopBtn/ToTopBtn';
import { CarLogo } from 'components/Icons/Icons';
import { TailSpin } from 'react-loader-spinner';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <LogoWrapper>
            <CarLogo />
            <span>Car Rent</span>
          </LogoWrapper>
        </Link>

        <nav>
          <StyledLink to={'/'}>Home</StyledLink>
          <StyledLink to={'/catalog'}>Catalog</StyledLink>
          <StyledLink to={'/favorites'}>Favorites</StyledLink>
        </nav>
      </Header>

      <main>
        <Section>
          <Container>
            <Suspense
              fallback={
                <TailSpin
                  color="#3470ff"
                  width={50}
                  height={50}
                  wrapperStyle={{ marginTop: '75px', justifyContent: 'center' }}
                />
              }
            >
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>

      <ToTopBtn />
    </>
  );
};

export default SharedLayout;
