import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";


function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) =>{
    console.log('Expenses.js');
    console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <Card >
            {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
        </Card>
        </div>
    )
}
export default Expenses;