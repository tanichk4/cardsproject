import React, { useState } from "react";
import {
  ButtonContainer,
  ButtonFlip,
  ButtonStatistics,
  ButtonVisibility,
  Card,
  CardBack,
  CardChip,
  CardFlex,
  CardFront,
  CardInner,
  CardRectangle,
  HiddenNumbers,
  IntroductionCard,
  LogoContainer,
} from "../Styles";

const UserCardWrapper = ({ userCvv, userName, userNumbers, userType }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showNumbers, setShowNumbers] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    if (showStatistics === false) {
      setShowButtons((prev) => !prev);
    } else {
      setShowStatistics(false);
      setShowButtons(true);
    }
  };

  const maskedNumber = userNumbers.replace(/\d(?=\d{4})/g, "*");

  return (
    <IntroductionCard showStatistics={showStatistics}>
      <Card showStatistics={showStatistics} onClick={handleCardClick}>
        <CardInner isFlipped={isFlipped}>
          <CardFront card={userType}>
            <CardChip showStatistics={showStatistics} />
            <HiddenNumbers show={showNumbers}>{userNumbers}</HiddenNumbers>
            {!showNumbers && maskedNumber}
            <CardFlex>
              <h2>{userName}</h2>
              <LogoContainer card={userType} />
            </CardFlex>
          </CardFront>
          <CardBack card={userType}>
            <div>{userCvv}</div>
            <div>{}</div>
            <CardRectangle />
          </CardBack>
        </CardInner>
      </Card>
      {showButtons && (
        <ButtonContainer showStatistics={showStatistics}>
          <ButtonVisibility onClick={() => setShowNumbers((prev) => !prev)} />
          <ButtonStatistics
            onClick={() => setShowStatistics((prev) => !prev)}
          />
          <ButtonFlip onClick={() => setIsFlipped((prev) => !prev)} />
        </ButtonContainer>
      )}
    </IntroductionCard>
  );
};

export default UserCardWrapper;
