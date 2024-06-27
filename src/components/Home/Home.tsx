// src/pages/Home.tsx
import React from "react";
import Header from "../Header/Header";
import FinancialChart from "../Charts/Chart";
import { useFinances } from "../../contexts/FinancesContext";
import {
  Container,
  Details,
  Section,
  SectionHeader,
  List,
  ListItem,
} from "./styles";

const Home: React.FC = () => {
  const { finances } = useFinances();

  const expenses = finances.filter((finance) => finance.type === "despesa");
  const goals = finances.filter((finance) => finance.type === "meta");
  const budgets = finances.filter((finance) => finance.type === "orçamento");
  const incomes = finances.filter((finance) => finance.type === "receita");

  return (
    <div>
      <Header />
      <Container>
        <h1>Financial Overview</h1>
        <FinancialChart />

        <Details>
          <h2>Details</h2>

          <Section>
            <SectionHeader>Expenses</SectionHeader>
            <List>
              {expenses.map((expense, index) => (
                <ListItem key={index}>
                  {expense.date}: ${expense.amount.toFixed(2)}
                </ListItem>
              ))}
            </List>
          </Section>

          <Section>
            <SectionHeader>Goals</SectionHeader>
            <List>
              {goals.map((goal, index) => (
                <ListItem key={index}>
                  {goal.date}: ${goal.amount.toFixed(2)}
                </ListItem>
              ))}
            </List>
          </Section>

          <Section>
            <SectionHeader>Budgets</SectionHeader>
            <List>
              {budgets.map((budget, index) => (
                <ListItem key={index}>
                  {budget.date}: ${budget.amount.toFixed(2)}
                </ListItem>
              ))}
            </List>
          </Section>

          <Section>
            <SectionHeader>Incomes</SectionHeader>
            <List>
              {incomes.map((income, index) => (
                <ListItem key={index}>
                  {income.date}: ${income.amount.toFixed(2)}
                </ListItem>
              ))}
            </List>
          </Section>
        </Details>
      </Container>
    </div>
  );
};

export default Home;
