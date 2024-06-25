// src/components/FinancialChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useFinances } from '../../contexts/FinancesContext';
import { ChartWrapper } from './Chart';

const FinancialChart: React.FC = () => {
  const { finances } = useFinances();

  const data = {
    labels: finances.map(finance => finance.date),
    datasets: [
      {
        label: 'Amount',
        data: finances.map(finance => finance.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <ChartWrapper>
      <Bar data={data} />
    </ChartWrapper>
  );
};

export default FinancialChart;
