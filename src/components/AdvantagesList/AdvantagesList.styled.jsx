import styled from 'styled-components';

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 22px 0;
`;

export const ListItem = styled.li`
  width: 380px;

  > h3 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
    color: var(--main-color);
  }

  > p {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 140px;

  & h1 {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 26px;
  }

  @media screen and (max-width: 865px) {
    margin: 0 auto;
    margin-bottom: 70px;
    width: 300px;
  }
`;

export const HeroPictureWrapper = styled.div`
  position: relative;

  @media screen and (max-width: 865px) {
    display: none;
  }
`;

export const HeroCar = styled.img`
  width: 1100px;
  position: relative;
  z-index: 2;
`;

export const HeroBackground = styled.img`
  z-index: 1;
  position: absolute;
  top: -40%;
  right: 0;
`;
