import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackArrow,
  InfoTitle,
  InfoContainer,
  PageContainer,
  FormButton,
  RegisterForm,
  RegisterLabel,
  InputContainer,
  RegisterField,
  RegisterErrorMessage,
  Card,
  CardFront,
  HiddenNumbers,
  CardFlex,
  LogoContainer,
  CardChip,
  RegisterCard,
} from "../Styles";

import { CardsContext } from "./UseFetch";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import LoadingScreen from "./LoadingScreen";

const CreditCard = () => {
  const { data, updateUser } = useContext(CardsContext);
  const navigate = useNavigate();

  if (!data || data.length === 0) {
    return <LoadingScreen />
  }
  function handleClick() {
    navigate(-1);
  }

  const initialValues = {
    userNumbers: "",
    userCvv: "",
    userName: "",
    userType: "",
  };

  const onSubmit = (values, { resetForm }) => {
    // создаем новый объект данных, который содержит старые данные и новые данные пользователя
    // const newData = [...data, values];
    const newUser = values;

    // вызываем функцию обновления данных с новыми данными
    updateUser(newUser);
    // сбрасываем форму
    resetForm(initialValues);

    navigate("/yourcards");

    console.log(newUser);
  };

  const validationSchema = yup.object({
    userNumbers: yup
      .string()
      .matches(/^\d+$/, "Only digits allowed")
      .matches(/^[0-9]{13}$|^[0-9]{16}$/, "Card number must be 13 or 16 digits")
      .required("Required"),
    userCvv: yup
      .string()
      .matches(/^\d+$/, "Only digits allowed")
      .matches(/^[0-9]{3}$/, "CVV must be 3 digits")
      .required("Required"),
    userName: yup
      .string()
      .matches(/^[a-zA-Z\s]*$/, "Only letters allowed")
      .required("Required"),
    userType: yup.string().required("Required"),
  });

  return (
    <PageContainer>
      <InfoContainer>
        <InfoTitle>Create a new card</InfoTitle>
        <BackArrow onClick={handleClick} />
      </InfoContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, handleChange, values }) => (
          <RegisterForm>
            <RegisterCard>
              <CardFront card={values.userType}>
                <CardChip />
                <HiddenNumbers show={true}>{values.userNumbers}</HiddenNumbers>
                <CardFlex>
                  <h2>{values.userName}</h2>
                  <LogoContainer card={values.userType} />
                </CardFlex>
              </CardFront>
            </RegisterCard>
            <InputContainer>
              <RegisterLabel htmlFor="userNumbers">Card number</RegisterLabel>
              <RegisterField
                type="text"
                id="userNumbers"
                name="userNumbers"
                placeholder="0888008800005569"
                onChange={handleChange}
              />
              <RegisterErrorMessage name="userNumbers" />
            </InputContainer>
            <InputContainer>
              <RegisterLabel htmlFor="userCvv">CVV</RegisterLabel>
              <RegisterField
                type="text"
                id="userCvv"
                name="userCvv"
                placeholder="123"
                onChange={handleChange}
              />
              <ErrorMessage name="userCvv" />
            </InputContainer>
            <InputContainer>
              <RegisterLabel htmlFor="userName">Your full name</RegisterLabel>
              <RegisterField
                type="text"
                id="userName"
                name="userName"
                placeholder="John Snow"
                onChange={handleChange}
              />
              <ErrorMessage name="userName" />
            </InputContainer>
            <InputContainer>
              <RegisterLabel htmlFor="userType">
                VISA or MASTERCARD
              </RegisterLabel>
              <RegisterField
                as="select"
                id="userType"
                name="userType"
                onChange={handleChange}
              >
                <option value="">Select card type</option>
                <option value="visa">VISA</option>
                <option value="mastercard">MASTERCARD</option>
              </RegisterField>
            </InputContainer>
            <ErrorMessage name="userType" />
            <FormButton type="submit" disabled={!isValid}>
              Add card
            </FormButton>
          </RegisterForm>
        )}
      </Formik>
    </PageContainer>
  );
};

export default CreditCard;
