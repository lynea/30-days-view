import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const boxHeight = "25rem";

export const StyledCreateBox = styled.div`
  padding: 1rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${boxHeight};
  -webkit-box-shadow: 3px 0px 10px 3px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 3px 0px 10px 3px rgba(0, 0, 0, 0.19);
  box-shadow: 3px 0px 10px 3px rgba(0, 0, 0, 0.19);
  position: absolute;
  left: 3rem;
  bottom: 3rem;
  z-index: 1000;
  background: white;
`;

export const PurpleBox = styled.div`
  border-radius: 0.4rem;
  margin-top: 5rem;
  grid-column: 4/8;
  width: 100%;
  height: ${boxHeight};
  position: relative;
  background: #d0acff;
  -webkit-box-shadow: 3px 0px 10px 3px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 3px 0px 10px 3px rgba(0, 0, 0, 0.19);
  box-shadow: 3px 0px 10px 3px rgba(0, 0, 0, 0.19);
`;

export const Input = styled.input`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 3rem;
  color: #2a0649;
  font-weight: bold;
  border: none;
  width: 100%;
  max-width: 100%;
  text-align: center;

  :focus-visible {
    border: none;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  height: 10rem;
  width: 100%;
  font-size: 1.2rem;
  box-sizing: border-box;
  padding: 1rem 2rem;
  :focus-visible {
    border: 1px solid red;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #e15dc2;
  width: 13rem;
  border-radius: 1.5rem;
  font-size: 1.3rem;
  box-sizing: border-box;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  color: white;
  font-weight: bold;
  border: none;
  :hover {
    -webkit-box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.19);
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.19);
  }
`;
