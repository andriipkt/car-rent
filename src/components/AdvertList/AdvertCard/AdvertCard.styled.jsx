import styled from 'styled-components';

export const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;

  width: 274px;
  height: 426px;
`;

export const PictureWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 268px;
  overflow: hidden;
  border-radius: 12px;

  margin-bottom: 14px;

  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;

  transform: scale(1);
  transition: transform var(--transition);

  &:hover {
    transform: scale(1.03);
  }
`;

export const FavIconWrapper = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;

  & svg path {
    transition: fill var(--transition), stroke var(--transition);
  }

  &:hover svg path {
    fill: var(--main-color);
    stroke: var(--main-color);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 24px; */

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

export const CardInfoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled.button`
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  width: ${props => props.$width || '100%'};
  height: ${props => props.$height || 'auto'};
  padding-top: 12px;
  padding-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 12px;

  transition: background-color var(--transition), color var(--transition);

  &:hover {
    background-color: var(--accent-color);
  }

  &[disabled] {
    color: var(--black);
    background-color: #d3d3d3;
    cursor: default;
  }
`;
