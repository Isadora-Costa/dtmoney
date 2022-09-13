import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    border-radius: 0.312rem;
    border: 1px solid var(--form-border);
    background: var(--form-input-fill);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--form-input-text);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    border-radius: 0.312rem;
    border: none;
    background: var(--green);
    color: #ffffff;

    margin-top: 1.5rem;

    font-weight: 600;
    font-size: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.91);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface SelectTypeBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const activeColors = {
  green: '#12A454',
  red: '#E52E4d',
}

export const SelectTypeBox = styled.button<SelectTypeBoxProps>`
    height: 4rem;
    border-radius: 0.312rem;
    
    border: ${(props) => (props.isActive 
      ? transparentize(0.9, activeColors[props.activeColor])
      : "1.5px solid var(--form-border)"
    )};
    
    background: ${(props) => (props.isActive 
      ? transparentize(0.9, activeColors[props.activeColor])
      : "transparent"
    )};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    &:hover {
      /* border-color: ${darken(0.1, '#d7d7d7')}; */
      border: 1.5px solid var(--form-input-text);
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      font-size: 1rem;
      font-weight: 400;
      color: var(--text-title);
      margin-left: 1rem;
    }
`;
