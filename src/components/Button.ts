import styled, { css } from "styled-components";

type ButtonType = {
  color?: string;
  icon?: boolean;
};

export const Button = styled.button<ButtonType>`
  background-color: #1976d2;
  border-radius: 4px;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.75;
  outline: 0;
  padding: 8px 22px;

  ${(props) =>
    props.color === "red" &&
    css`
      background-color: #d32f2f;
    `}

  ${(props) =>
    props.color === "green" &&
    css`
      background-color: #2e7d32;
    `}

  ${(props) =>
    props.icon &&
    css`
      font-size: 2.4em;
      font-weight: normal;
      line-height: 1em;
      padding: 3px 18px 8px 18px;
    `}

  :hover, :focus {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  :disabled {
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: none;
    color: rgba(0, 0, 0, 0.26);
    cursor: default;
    pointer-events: none;
  }
`;
