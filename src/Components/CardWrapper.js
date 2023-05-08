import React, { useState, useMemo } from "react";
import {
  IntroductionCard,
  Card,
  CardInner,
  CardFront,
  CardBack,
  ButtonContainer,
  ButtonVisibility,
  ButtonStatistics,
  ButtonFlip,
  LogoContainer,
  HiddenNumbers,
  CardChip,
  CardFlex,
  CardRectangle,
  Statistics,
} from "../styles/Styles";

const CardWrapper = ({ owner, statistic, card }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showNumbers, setShowNumbers] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    if (!showStatistics) {
      setShowButtons((prev) => !prev);
    } else {
      showStatistics && setShowStatistics(false);
    }
  };

  const maskedNumber = useMemo(
    () => card.numbers.replace(/\d(?=\d{4})/g, "*"),
    [card.numbers]
  );

  return (
    <IntroductionCard showStatistics={showStatistics}>
      <Card showStatistics={showStatistics} onClick={handleCardClick}>
        <CardInner isFlipped={isFlipped}>
          <CardFront card={card.type}>
            <CardChip showStatistics={showStatistics} />
            <HiddenNumbers show={showNumbers}>{card.numbers}</HiddenNumbers>
            {!showNumbers && maskedNumber}
            <CardFlex>
              <h2>{owner}</h2>
              <LogoContainer card={card.type} />
            </CardFlex>
          </CardFront>
          <CardBack card={card.type}>
            <div>{card.cvv}</div>
            <div>{card.expiry_date}</div>
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
      {showStatistics && (
        <Statistics showStatistics={showStatistics}>
          {statistic.map(({ id, date, place, expense, currency }) => {
            return (
              <div key={id}>
                <div>{date}</div>
                <div>{place}</div>
                <div>
                  {expense}
                  {currency}
                </div>
              </div>
            );
          })}
        </Statistics>
      )}
    </IntroductionCard>
  );
};

export default CardWrapper;
