import {React, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getExpenses } from "../services/expenses";
import {Row, Col, Button} from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";

export default () => {
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenseReducer.expenses);
    
    useEffect(()=>{
        getExpenses(dispatch);
    }, []);

    return expenses.map((expense) => 
        <div style ={{marginBottom: "1rem"}}>
            <ListRow expense={expense} />
        </div>
    )
}

const ListRow = ({expense}) => {
    const [isEditing, setIsEditing] = useState(false);

    return isEditing
    ? <ExpenseForm expense = {expense} setIsEditing={setIsEditing}/>
    :<div>
        <Row>
            <Col>{expense.description}</Col>
            <Col>${expense.amount}</Col>
            <Col><Button variant="warning" onClick={()=>setIsEditing(!isEditing)}>Edit</Button></Col>
        </Row>
        <hr />
    </div>
}