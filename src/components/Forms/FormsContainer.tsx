import React from "react";
import { FormWrapper, FormTitle, Label, Input } from "./styles";

interface FormContainerProps {
  title: string;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({
  title,
  onSubmit,
  children,
}) => {
  return (
    <FormWrapper onSubmit={onSubmit}>
      <FormTitle>{title}</FormTitle>
      {children}
    </FormWrapper>
  );
};
export { FormContainer, Label, Input };
