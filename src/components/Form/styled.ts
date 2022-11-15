import { Button } from "components/Button";
import styled from "styled-components";

export const Container = styled.div`
  padding: 8px 16px 16px;
  display: flex;

  form {
    flex: 1;
    display: flex;
  }

  input[type="text"] {
    font-size: 1.2em;
    font-weight: normal;
    padding: 10px;
    width: 22%;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }
`;

export const FormButton = styled(Button)`
  display: inline-block;
  font-size: 1.4em;
  margin-left: 16px;
  padding: 4px 40px;
`;
