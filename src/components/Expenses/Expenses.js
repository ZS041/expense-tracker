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
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}  />
        </Card>
        </div>
    )
}
export default Expenses;