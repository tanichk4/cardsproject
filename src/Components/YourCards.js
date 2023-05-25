import { useContext, useMemo } from "react";
import { CardsContext } from "../context/CardsContext.js";
import {
  PageContainer,
  InfoContainer,
  InfoIcon,
  InfoTitle,
} from "../styles/Styles.js";
import { Link } from "react-router-dom";
import { Card } from "./Card.js";
import { UserCard } from "./UserCard.js";
import LoadingScreen from "./LoadingScreen.js";

const YourCards = () => {
  const { data, user } = useContext(CardsContext);

  const cardList = useMemo(() => {
    if (!data || data.length === 0) {
      return null;
    }

    const userCards = user.map((item) => {
      return (
        <UserCard
          userCvv={item.userCvv}
          userName={item.userName}
          userNumbers={item.userNumbers}
          userType={item.userType}
        />
      );
    });

    const cards = data.map(({ user_name, data }) => {
      return data.map(({ card, statistic }) => (
        <Card
          key={card.user_id}
          owner={user_name}
          statistic={statistic}
          card={card}
        />
      ));
    });

    return [...userCards, ...cards];
  }, [data, user]);

  return (
    <PageContainer>
      <InfoContainer>
        <InfoTitle>Your Cards</InfoTitle>
        <Link to="/newuser">
          <InfoIcon />
        </Link>
      </InfoContainer>

      {cardList || <LoadingScreen />}
    </PageContainer>
  );
};

export default YourCards;
