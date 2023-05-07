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
} from "../Styles";

import { CardsContext } from "./UseFetch";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const CreditCard = () => {
  const { data, updateData } = useContext(CardsContext);

  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  const initialValues = {
    numbers: "",
    cvv: "",
    user_name: "",
    type: "",
  };

  const onSubmit = (values, { resetForm }) => {
    // создаем новый объект данных, который содержит старые данные и новые данные пользователя
    // const newData = [...data, values];
    const newData = values;

    // вызываем функцию обновления данных с новыми данными
    updateData(newData);
    // сбрасываем форму
    resetForm(initialValues);

    navigate("/");

    console.log(newData);
  };

  const validationSchema = yup.object({
    numbers: yup
      .string()
      .matches(/^\d+$/, "Only digits allowed")
      .matches(/^[0-9]{13}$|^[0-9]{16}$/, "Card number must be 13 or 16 digits")
      .required("Required"),
    cvv: yup
      .string()
      .matches(/^\d+$/, "Only digits allowed")
      .matches(/^[0-9]{3}$/, "CVV must be 3 digits")
      .required("Required"),
    user_name: yup.string().required("Required"),
    type: yup.string().required("Required"),
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
            <Card>
              <CardFront>
                <CardChip />
                <HiddenNumbers show={true}>{values.numbers}</HiddenNumbers>
                <CardFlex>
                  <h2>{values.user_name}</h2>
                  <LogoContainer card={values.type} />
                </CardFlex>
              </CardFront>
            </Card>
            <InputContainer>
              <RegisterLabel htmlFor="numbers">Card number</RegisterLabel>
              <RegisterField
                type="text"
                id="numbers"
                name="numbers"
                placeholder="0888008800005569"
                onChange={handleChange}
              />
              <RegisterErrorMessage name="numbers" />
            </InputContainer>
            <InputContainer>
              <RegisterLabel htmlFor="cvv">CVV</RegisterLabel>
              <RegisterField
                type="text"
                id="cvv"
                name="cvv"
                placeholder="123"
                onChange={handleChange}
              />
              <ErrorMessage name="cvv" />
            </InputContainer>
            <InputContainer>
              <RegisterLabel htmlFor="user_name">Your full name</RegisterLabel>
              <RegisterField
                type="text"
                id="user_name"
                name="user_name"
                placeholder="John Snow"
                onChange={handleChange}
              />
              <ErrorMessage name="user_name" />
            </InputContainer>
            <InputContainer>
              <RegisterLabel htmlFor="type">VISA or MASTERCARD</RegisterLabel>
              <RegisterField
                as="select"
                id="type"
                name="type"
                onChange={handleChange}
              >
                <option value="" defaultValue disabled>
                  Select card type
                </option>
                <option value="visa">VISA</option>
                <option value="mastercard">MASTERCARD</option>
              </RegisterField>
            </InputContainer>
            <ErrorMessage name="type" />
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
