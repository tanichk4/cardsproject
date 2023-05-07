import React from "react";

import UserCardWrapper from "./UserCardWrapper.js";

// приймаємо пропси щоб їх відрендерити в розмітці (CardWrapper) картки
export const UserCard = ({ userCvv, userName, userNumbers, userType }) => {
  return (
    <UserCardWrapper
      userCvv={userCvv}
      userName={userName}
      userNumbers={userNumbers}
      userType={userType}
    />
  );
};
