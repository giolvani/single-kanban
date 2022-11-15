import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);
  margin: 0 24px;
  min-height: 310px;

  .phases {
    display: flex;
    flex-direction: row;
    height: 100%;
    overflow: auto;
  }
`;
