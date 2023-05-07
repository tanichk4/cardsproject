import styled, { keyframes } from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

const slideInAnimation = keyframes`
  from {
    transform: translateY(-40px);
  }

  to {
    transform: translateY(0);
  }
`;

export const PageContainer = styled.div`
  align-self: flex-start;
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 57px 70px 266px 70px;
`;

export const InfoContainer = styled.div`
  width: 525px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const InfoIcon = styled.div`
  cursor: pointer;
  background-image: url("/plus_1.svg");
  width: 47px;
  height: 47px;
`;

export const InfoTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 61px;
  letter-spacing: 4.17391px;
  color: #000000;
  margin: auto 0;
`;

export const HiddenNumbers = styled.p`
  display: ${({ show }) => (show ? "block" : "none")};
`;

export const ButtonContainer = styled.div`
  z-index: -1;
  bottom: -70px;
  position: absolute;
  display: ${(props) => (props.showStatistics ? "none" : "flex")};
  justify-content: space-evenly;
  align-items: stretch;
  width: 534px;
  height: ${(props) => (props.showStatistics ? "100px" : "100px")};
  border-radius: 48.6px;
  background-color: #dcdce3;
  animation: ${slideInAnimation} 0.5s ease-out;
`;

export const Button = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  align-self: self-end;
  margin-bottom: 15px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  &:first-child {
    &:after {
      content: " ";
      position: absolute;
      bottom: 50%;
      left: 0;
      width: 100%;
      border-bottom: 3px solid black;
      transform: rotate(-45deg);
    }
  }
`;

export const ButtonVisibility = styled(Button)`
  background-image: url("/view.svg");
  background-size: cover;
  width: 46px;
  height: 46px;
`;

export const ButtonStatistics = styled(Button)`
  background-image: url("/statistics.svg");
  background-size: cover;
  width: 46px;
  height: 46px;
`;

export const ButtonFlip = styled(Button)`
  background-image: url("/flip.svg");
  background-size: cover;
  width: 46px;
  height: 46px;
`;

export const CardChip = styled.div`
  display: ${(props) => (props.showStatistics ? "none" : "block")};
  background-image: url("/chip.svg");
  background-size: cover;
  width: 69.6px;
  height: 56.23px;
`;
export const CardNumberContainer = styled.div`
  font-size: 30px;
  line-height: 38px;
  letter-spacing: 4.17391px;
`;

export const LogoContainer = styled.div`
  height: 86px;

  width: ${({ card }) => (card === "visa" ? "88px" : "70px")};
  height: ${({ card }) => (card === "visa" ? "88px" : "42px")};
  background-image: ${({ card }) =>
    card === "visa" ? "url(/visa.svg)" : "url(/Mastercard.svg)"};
  background-repeat: no-repeat;
  background-size: contain;
`;

export const CardFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardRectangle = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 9.58%;
  bottom: 71.56%;

  background: #161039;
`;

export const Statistics = styled.div`
  box-sizing: border-box;
  position: absolute;

  width: 534px;
  height: auto;
  padding: 120px 40px 40px;
  background: #fbfbff;
  border-radius: 48.6px;
  z-index: -10;
  top: 100px;
  & div {
    align-self: flex-start;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

export const BackArrow = styled.div`
  cursor: pointer;
  background-image: url("/backarrow.svg");
  width: 47px;
  height: 47px;
`;

export const FormButton = styled.button`
  border: none;
  cursor: pointer;
  width: 514px;
  height: 76px;
  background: #aa24e9;
  border-radius: 25px;
  color: white;
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: 4.17391px;
  color: #ffffff;
  margin-top: 85px;

  &:disabled {
    cursor: not-allowed;
    background-color: #f2f2f2;
    color: rgba(0, 0, 0, 0.44);
  }
`;

export const RegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: red;
  box-sizing: border-box;
  &:first-child {
    margin-bottom: 44px;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const RegisterLabel = styled.label`
  font-size: 30px;
  line-height: 38px;
  letter-spacing: 4.17391px;
  margin: 5px;
  color: rgba(1, 0, 0, 1);
`;

export const RegisterField = styled(Field)`
  background: #e7d7ef;
  border-radius: 25px;
  border: none;
  width: 514px;
  height: 76px;
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: 4.17391px;
  color: rgba(0, 0, 0, 0.44);
  &::placeholder {
    padding: 19px 436px 19px 23px;
  }

  &:focus {
    outline: none;
  }
`;

export const RegisterOption = styled.option``;

export const RegisterErrorMessage = styled(ErrorMessage)``;

export const IntroductionCard = styled.div`
  position: relative;
  z-index: 2;
  margin: auto;

  &:not(:last-child) {
    margin-bottom: ${({ showStatistics }) =>
      showStatistics ? "1000px" : "100px"};
  }
`;

export const CardInner = styled.div`
  position: relative;
  z-index: 10;

  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${(props) =>
    props.isFlipped &&
    `transform: rotateY(180deg);
`}
`;

export const Card = styled.div`
  width: 534px;
  height: 334px;
  perspective: 1200px;
  ${(props) =>
    props.showStatistics &&
    `width: 534px;
    height: 202px;
`}
  transition: height 0.3s ease-in-out;
`;

export const CardFront = styled.div`
  border-radius: 48.6px;
  padding: 55px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #b08ead;
  color: white;

  & p {
    top: calc(50% - 31px / 2 + 85.63px);
  }
`;

export const CardBack = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 48.6px;
  padding: 55px;
  text-align: center;
  transform: rotateY(180deg);

  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #b08ead;
  color: white;
`;

export const StatisticsInner = styled.div`
  position: absolute;
  z-index: 10;

  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${(props) =>
    props.isFlipped &&
    `transform: rotateY(180deg);
`}
`;

export const StatisticsFront = styled.div`
  border-radius: 48.6px;
  padding: 55px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #fbfbff;

  & p {
    top: calc(50% - 31px / 2 + 85.63px);
  }
`;

export const StatisticsBack = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 48.6px;
  padding: 55px;
  text-align: center;
  transform: rotateY(180deg);

  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #b08ead;
  color: white;
`;
