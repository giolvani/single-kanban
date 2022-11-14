import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 10px #777777;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  min-height: 80px;
`;

export const Actions = styled.div`
  align-self: center;
  flex-grow: 1;
  max-width: 50px;
  min-width: 50px;
  padding: 0 8px;
  text-align: center;
`;

export const Description = styled.p`
  align-self: center;
  flex-grow: 1;
  font-size: 1.3em;
  font-weight: 400;
  margin: 0;
  text-align: center;
`;
