import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  z-index: 10;

  width: 100%;
  padding: 0 44px;

  background-color: white;
  border-bottom: 1px solid rgba(18, 20, 23, 0.1);

  > nav {
    display: flex;
    gap: 50px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  > svg {
    width: 44px;
    height: 44px;
  }

  > span {
    text-decoration: none;
    font-weight: 600;
    font-size: 24px;
    color: var(--black);
  }

  > svg {
    fill: var(--black);

    transition: fill var(--transition);
  }

  &:hover svg {
    fill: var(--accent-color);
  }
`;

export const Section = styled.section`
  padding: 145px 0 80px 0;
`;

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 18px;
`;

export const StyledLink = styled(NavLink)`
  padding: 20px 10px;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  transition: color var(--transition);

  position: relative;

  &:hover {
    color: var(--accent-color);
  }

  &.active::after {
    content: '';

    position: absolute;
    bottom: calc(0% - 1px);
    left: 0;

    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--accent-color);
  }
`;
