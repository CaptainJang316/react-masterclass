import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor}
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

const Emoji = styled.span`
  font-size: 36px;
  color: ${(props) => props.theme.backgroundColor};
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  animation:${RotationAnimation} 1s linear infinite;
  
  /*이렇게 styled component 안에 그 하위로 사용되는 element에 대한 css도 정의 가능*/
  /*+ element tag 말고도 다른 styled component를 가져올 수도 있음*/
  ${Emoji}:hover {
      font-size:20px;
      color: ${(props) => props.theme.backgroundColor};
    }
  }
`;


function App() {
  return <Wrapper>
    <Box>
      <Emoji as="p">adsf</Emoji>
    </Box>
    <Emoji>DDDD</Emoji>
  </Wrapper>;
}

export default App;
