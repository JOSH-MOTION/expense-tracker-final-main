import React from 'react'
import {Chart as ChartJs, 
    DoughnutController,
    ArcElement,
    Title,
    Tooltip,
    CategoryScale,
    LinearScale,
  } from 'chart.js';

import {Doughnut} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'


ChartJs.register(
    DoughnutController,
    ArcElement,
    Title,
    Tooltip,
    CategoryScale,
    LinearScale,
  );

function Chart() {
    const {incomes, expenses} = useGlobalContext()

    // Create a data structure that includes colors for each expense category
  const expenseData = expenses.map((expense) => ({
    category: expense.category,
    amount: expense.amount,
    color: getRandomColor(),
  }));

  const incomeColor = 'green';

    const data = {
        labels: ['Income', ...expenseData.map((expense) => expense.category)],
        datasets: [
          {
            data: [incomes.reduce((total, income) => total + income.amount, 0), ...expenseData.map((expense) => expense.amount)],
            backgroundColor: [incomeColor, ...expenseData.map((expense) => expense.color)],
          },
        ],
      };

      return (
        <ChartContainer>
        <DoughnutChartContainer>
          <Doughnut data={data} />
        </DoughnutChartContainer>
        <SummaryContainer>
          <SummaryTitle>Expense Summary:</SummaryTitle>
          <ul>
            {expenseData.map((expense) => (
              <li key={expense.category}>
                <span style={{ color: expense.color }}>{expense.category}:</span> ${expense.amount}
              </li>
            ))}
          </ul>
        </SummaryContainer>
      </ChartContainer>
      );
}

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DoughnutChartContainer = styled.div`
  flex: 1;
`;

const SummaryContainer = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const SummaryTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}