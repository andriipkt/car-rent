import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    gap: 24px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const Section = styled.section`
  padding: 80px 0;
`;

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 18px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
