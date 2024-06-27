// src/pages/Income.tsx
import React, { useState } from "react";
import { useFinances } from "../../../contexts/FinancesContext";
import { FormContainer, Label, Input } from "../../Forms/FormsContainer";

const Income: React.FC = () => {
  const { addFinance } = useFinances();
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addFinance({ type: "receita", amount: parseFloat(amount), date });
    setAmount("");
    setDate("");
  };

  return (
    <FormContainer title="Add Income" onSubmit={handleSubmit}>
      <Label>
        Amount:
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </Label>
      <Label>
        Date:
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </Label>
    </FormContainer>
  );
};

export default Income;
