import React, { FC } from 'react';
import { ExpenseDto } from '../expenseitem/expense-dto';
import ExpenseForm from './ExpesenForm';
import './NewExpense.scss';

interface NewExpenseProps {}

const NewExpense: FC<NewExpenseProps> = () => {
  const onSaveExpenseHandler = (dto: ExpenseDto) => {
    const savedData: ExpenseDto = { ...dto, id: Math.random() + '' };
    console.log(`Inside new expense form - `, savedData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseHandler}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
