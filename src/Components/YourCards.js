import React, { useContext } from "react";
import { CardsContext } from "./UseFetch.js";
import {
  PageContainer,
  InfoContainer,
  InfoIcon,
  InfoTitle,
} from "../Styles.js";
import { Link } from "react-router-dom";
import { Card } from "./Card.js";
import { UserCard } from "./UserCard.js";
import LoadingScreen from "./LoadingScreen.js";

const YourCards = () => {
  const { data, user } = useContext(CardsContext);

  if (!data || data.length === 0) {
    return <LoadingScreen />;
  }

  console.log(data);
  console.log(user);
  return (
    <PageContainer>
      <InfoContainer>
        <InfoTitle>Your Cards</InfoTitle>
        <Link to="/">
          <InfoIcon />
        </Link>
      </InfoContainer>

      {user.map((item) => {
        return (
          <UserCard
            userCvv={item.userCvv}
            userName={item.userName}
            userNumbers={item.userNumbers}
            userType={item.userType}
          />
        );
      })}

      {data.map(({ user_name, data }) => {
        return data.map(({ card, statistic }) => (
          <Card
            key={card.user_id}
            owner={user_name}
            statistic={statistic}
            card={card}
          />
        ));
      })}
    </PageContainer>
  );
};

export default YourCards;
