import './ExpenseList.scss';

import { randAmount, randCompanyName, randPastDate } from '@ngneat/falso';

import Card from '../card/Card';
import { ExpenseDto } from '../expenseitem/expense-dto';
import { ExpenseItem } from '../expenseitem/ExpenseItem';

const ExpenseList = () => {
  const expenses: ExpenseDto[] = [];
  for (let i = 0; i < 5; i++) {
    expenses.push({
      id: `e${i}`,
      date: randPastDate(),
      title: randCompanyName(),
      amount: randAmount()
    });
  }

  const expensesComps = expenses.map((e, index) => (
    <ExpenseItem key={index} dto={e} />
  ));
  return <Card className="expense-list">{expensesComps}</Card>;
};

export default ExpenseList;
