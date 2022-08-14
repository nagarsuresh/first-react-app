import './ExpenseItem.scss';

import { ExpenseDto } from './expense-dto';
import ExpenseDate from '../expensedate/ExpenseDate';
import Card from '../card/Card';
import { useState } from 'react';

export const ExpenseItem = (props: { dto: ExpenseDto }) => {
  const { dto } = props;
  const [title, setTitle] = useState(dto.title);

  console.log('Function evaluated...');

  const changeTitle = () => {
    setTitle('New Title ');
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={dto.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${dto.amount}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  )
}

