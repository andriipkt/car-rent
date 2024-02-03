import styled from 'styled-components';

export const ToTopArrowBtn = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: fit-content;
  border-radius: 50%;
  background: transparent;

  > svg {
    width: 100%;
    height: 100%;
    fill: var(--main-color);

    transition: fill var(--transition);
  }

  &:hover svg {
    fill: var(--accent-color);
  }
`;
