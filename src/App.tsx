import './App.scss';

import React, { useState } from 'react';

import ExpenseList from './expenselist/ExpenseList';
import NewExpense from './newexpense/NewExpense';
import { randAmount, randCompanyName, randPastDate } from '@ngneat/falso';
import { ExpenseDto } from './expenseitem/expense-dto';

function App() {
  const initExpenses: ExpenseDto[] = [];
  for (let i = 0; i < 10; i++) {
    initExpenses.push({
      id: `e${i}`,
      date: randPastDate({years: 3}),
      title: randCompanyName(),
      amount: randAmount()
    });
  }

  const [expenses, setExpenses] = useState(initExpenses);

  const onCreateNewExpenseHandler = (dto: ExpenseDto) => {
    setExpenses((prevExpenses) => {
      return [dto, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <div className="App-header">My Expenses App</div>
      <div className="App-body">
        <NewExpense onCreateNewExpense={onCreateNewExpenseHandler}></NewExpense>
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  )
}

export default App;
