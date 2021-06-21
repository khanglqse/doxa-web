import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};
  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }
  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }
  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;

export const SignInSignUpContainer = styled.div`
  max-width: 350px;
  margin: 50px auto;
  padding: 36px;
  border: 1px solid gainsboro;
  background: white;
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  height: 34px;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.13;
  text-align: center;
  font-weight: 400;
`;

export const Header = styled.div`
  padding: 60px 0;
`