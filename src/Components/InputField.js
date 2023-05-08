import React from "react";
import {
  RegisterLabel,
  RegisterField,
  RegisterErrorMessage,
} from "../styles/Styles";
import { ErrorMessage } from "formik";

const InputField = ({
  label,
  id,
  name,
  placeholder,
  type,
  onChange,
  errorMessage,
}) => {
  return (
    <div>
      <RegisterLabel htmlFor={id}>{label}</RegisterLabel>
      <RegisterField
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <ErrorMessage name={name} component={RegisterErrorMessage} />
      {errorMessage && (
        <RegisterErrorMessage>{errorMessage}</RegisterErrorMessage>
      )}
    </div>
  );
};

export default InputField;
