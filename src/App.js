import styled from "styled-components";

const Father = styled.div`
  display: block;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({required: true, minlength: 10})`
  background-color: tomato;
`;


function App() {
  return (
    <Father as="header">
      <Btn as="a" href="">Log in</Btn>
      <input />
      <input />
      <input />
      <input />
      <input />
      <input />
      <Btn>Log in</Btn>
      <Box bgColor="teal"/>
      <Circle bgColor="tomato"/>
    </Father>
  );
}

export default App;
