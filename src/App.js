import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const RotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius:100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation:${RotationAnimation} 1s linear infinite;
  
  /*이렇게 styled component 안에 그 하위로 사용되는 element에 대한 css도 정의 가능*/
  span {
    font-size: 50px;
    /*'&'는 span 자체를 지칭함.*/
    &:hover {
      font-size:20px;
    }
    &:active {
      opacity: 0;
    }
  }
`;


function App() {
  return <Wrapper>
    <Box>
      <span>adsf</span>
    </Box>
  </Wrapper>;
}

export default App;
