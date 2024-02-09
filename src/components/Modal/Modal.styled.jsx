import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(18, 20, 23, 0.5);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 541px;
  padding: 40px;

  background-color: #fff;
  border-radius: 24px;
  color: var(--black);

  > h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;

    color: var(--black);

    margin-bottom: 8px;

    > span {
      color: var(--main-color);
    }

    > h4 {
      font-weight: 500;
      font-size: 14px;
      line-height: 1.43;
    }
  }
`;

export const Picture = styled.img`
  width: 461px;
  border-radius: 14px;

  margin-bottom: 14px;
`;

export const CloseIconWrapper = styled.span`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;

  > svg path {
    stroke: #121417;
    transition: stroke var(--transition);
  }

  &:hover > svg path {
    stroke: var(--accent-color);
  }
`;

export const TagsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  color: var(--secondary-text-color);
  font-size: 12px;

  &:not(:last-child) {
    padding-right: 6px;
    margin-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;

export const RentalConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const RentalConditionItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #363535;

  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;

  > span {
    font-weight: 600;
    color: var(--main-color);
  }
`;
