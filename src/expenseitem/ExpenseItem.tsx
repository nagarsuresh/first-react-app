import './ExpenseItem.scss';

import Card from '../card/Card';
import ExpenseDate from '../expensedate/ExpenseDate';
import { ExpenseDto } from './expense-dto';

export const ExpenseItem = (props: { dto: ExpenseDto }) => {
  const { dto } = props;

  return (
    <Card className="expense-item">
      <ExpenseDate date={dto.date} />
      <div className="expense-item__description">
        <h2>{dto.title}</h2>
        <div className="expense-item__price">${dto.amount}</div>
      </div>
    </Card>
  );
};
