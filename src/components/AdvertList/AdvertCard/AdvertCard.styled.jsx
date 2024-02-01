import styled from "styled-components";

export const FavIconWrapper = styled.span`
  position: absolute;
  z-index: 10;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;

  & svg path {
    fill: transparent;
    stroke: white;

    transition: fill var(--transition), stroke var(--transition);
  }

  &:hover svg path {
    fill: var(--main-color);
    stroke: var(--main-color);
  }
`;

export const Picture = styled.div`
  width: 100%;
  height: 100%;

  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    url(${(props) => props.$imgsrc});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transform: scale(1);
  transition: transform var(--transition);
`;

export const CardWrapper = styled.div`
  width: 274px;

  &:hover ${Picture} {
    transform: scale(1.05);
  }
`;

export const PictureWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 268px;
  overflow: hidden;
  border-radius: 12px;

  margin-bottom: 14px;
`;

export const Button = styled.button`
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 12px;

  transition: background-color var(--transition);

  &:hover {
    background-color: var(--accent-color);
  }
`;

export const CardTitleWrapper = styled.div`
  margin-bottom: 8px;

  > h2 {
    font-size: 16px;
    font-weight: 500;

    color: var(--black);

    > span {
      color: var(--main-color);
    }
  }

  > p {
    font-size: 16px;
    font-weight: 500;

    color: var(--black);
  }
`;

export const CardInfoWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 28px;
`;

export const InfoEl = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: "";
    display: block;

    margin: 0 6px;

    width: 1px;
    height: 90%;
    background-color: rgba(18, 20, 23, 0.1);
  }

  > p {
    color: var(--secondary-text-color);
    font-size: 12px;
  }
`;
