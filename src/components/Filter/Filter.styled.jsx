import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  gap: 14px;
  align-items: flex-end;

  & label {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: var(--label-color);
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  & input {
    width: 160px;
    height: 48px;
    padding-left: 24px;

    background-color: var(--light-background);
    border: none;
  }

  & input[name='from'] {
    border-radius: 14px 0 0 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }

  & input[name='to'] {
    border-radius: 0 14px 14px 0;
  }

  & input::placeholder {
    color: var(--black);
  }

  & input:focus {
    outline: none;
    border: 1px solid var(--main-color);
  }
`;
