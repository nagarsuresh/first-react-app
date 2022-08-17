import { FC } from 'react';
import Chart from '../chart/Chart';
import { ChartDataPoint } from '../chart/chart-dto';
import { ExpenseDto } from '../expenseitem/expense-dto';

export interface ExpensesChartProps {
  expenses: ExpenseDto[];
}

const ExpensesChart: FC<ExpensesChartProps> = (props: ExpensesChartProps) => {
  const chartDataPoints: ChartDataPoint[] = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'June', value: 0 },
    { label: 'July', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 }
  ];

  props.expenses.forEach((expense) => {
    const month = expense.date?.getMonth();
    if (month) {
      chartDataPoints[month].value += expense.amount;
    }
  });

  return <Chart dataPoints={chartDataPoints}></Chart>;
};

export default ExpensesChart;
