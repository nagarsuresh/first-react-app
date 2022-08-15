import './NewExpense.scss';

import React, { FC, useState } from 'react';

import { ExpenseDto } from '../expenseitem/expense-dto';
import ExpenseForm from './ExpenseForm';

interface NewExpenseProps {
  onCreateNewExpense: (dto: ExpenseDto) => void;
}

const NewExpense: FC<NewExpenseProps> = (props: NewExpenseProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const onSaveExpenseHandler = (dto: ExpenseDto) => {
    const savedData: ExpenseDto = { ...dto, id: Math.random() + '' };
    console.log(`Inside new expense form - `, savedData);
    props.onCreateNewExpense(savedData);
    setEditMode(false);
  };

  if (!editMode) {
    return (
      <div className="new-expense">
        <button onClick={() => setEditMode(true)}>Add New Expense</button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseHandler}
          onCancel={() => setEditMode(false)}
        ></ExpenseForm>
      </div>
    );
  }
};
export default NewExpense;
