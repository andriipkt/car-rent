import styled from 'styled-components';

export const AdvertCardsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
`;

export const LoadMoreBtn = styled.button`
  margin: 0 auto;
  margin-top: 75px;
  font-weight: 500;
  font-size: 16px;
  text-decoration: underline;
  color: var(--main-color);
  padding: 10px 26px;
  background: transparent;

  transition: color var(--transition);

  &:hover {
    color: var(--accent-color);
  }
`;
