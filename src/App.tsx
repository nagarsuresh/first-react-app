import './App.scss';

import React from 'react';

import ExpenseList from './expenselist/ExpenseList';
import NewExpense from './NewExpense/NewExpense';

function App() {
  return (
    <div className="App">
      <div className='App-header'>My Expenses App</div>
      <div className='App-body'>
        <NewExpense></NewExpense>
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
