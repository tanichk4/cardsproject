import UserCardWrapper from "./UserCardWrapper.js";

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
