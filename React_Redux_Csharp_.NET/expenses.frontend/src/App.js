import React from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function App() {
  return (
    <div className="App" style={{width: "90%", margin: "auto"}}>
      <h3>New Expense</h3>
      <ExpenseForm />
      <hr style={{border: "1px solid gray"}}/>
      <h3>Your Expenses</h3>
      <ExpenseList />
    </div>
  );
}

export default App;
