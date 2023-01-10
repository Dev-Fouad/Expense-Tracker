import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  let saveExpenseDataHandler = (enteredExpenseData) => {
    let expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    }
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
