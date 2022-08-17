import './ExpenseList.scss';

import { FC, useState } from 'react';

import Card from '../card/Card';
import { ExpenseDto } from '../expenseitem/expense-dto';
import { ExpenseItem } from '../expenseitem/ExpenseItem';
import ExpenseFilter from '../expensefilter/ExpenseFilter';
import ExpensesChart from '../expenseschart/ExpensesChart';

interface ExpenseListProps {
  expenses: ExpenseDto[];
}

const ExpenseList: FC<ExpenseListProps> = (props: ExpenseListProps) => {
  const [filteredYear, setFilteredYear] = useState<string>('2022');

  const filteredExpenses = props.expenses.filter(
    (e) => !filteredYear || e.date?.getFullYear() === +filteredYear
  );

  const expensesComps = filteredExpenses.map((e, index) => (
    <ExpenseItem key={e.id} dto={e} />
  ));

  let contents = [<div>No Expenses Found</div>];
  if (expensesComps.length > 0) {
    contents = expensesComps;
  }

  return (
    <Card className="expense-list">
      <ExpenseFilter
        selectedYear={filteredYear}
        onYearChange={(value) => setFilteredYear(value)}
      ></ExpenseFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <div className='expense-list__contents'>{contents}</div>
    </Card>
  );
};

export default ExpenseList;
