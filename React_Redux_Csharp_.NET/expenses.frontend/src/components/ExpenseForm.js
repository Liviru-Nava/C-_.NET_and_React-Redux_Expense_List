import {React, useState, useEffect} from 'react';
import {Form, Row, Col, Button} from "react-bootstrap";
import { newExpense } from '../services/expenses';
import { useDispatch } from 'react-redux';

export default ({expense, setIsEditing}) => {
    //create the useStates to manage the form variable states. 
    const descriptions = ["Groceries", "Credit cards", "Student loans", "Gas", "Eating out"];
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState(descriptions[0]);
    const [isNewExpense, setIsNewExpense] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(expense !== undefined){
            setIsNewExpense(false);
            setAmount(expense.amount);
        }else{
            setIsNewExpense(true);
        }
    }, [expense]);

    return <Form onSubmit={(event) => {
        event.preventDefault();
        if(isNewExpense){
            //create new expense
            newExpense(dispatch, {description: description, amount: amount});
        }else{
            //edit response
            setIsEditing(false);
        }
    }}>
        <Row>
            <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control as = "select" onChange={(event) => setDescription(event.target.value)}>
                    {descriptions.map((description) => <option>{description}</option>)}
                </Form.Control>
            </Col>
            <Col>
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" step="0.01" placeholder={amount} onChange={(event) => setAmount(event.target.value)}/>
            </Col>
            <Col><div stye ={{marginTop: "auto"}}>
                {isNewExpense
                ? <Button variant="primary" type='submit'>Add</Button>
                : <div>
                    <Button variant="danger">Delete</Button>
                    <Button variant="success">Save</Button>
                    <Button variant="default" onClick={()=> setIsEditing(false)}>Cancel</Button>
                </div>
                }
            </div>
            </Col>
        </Row>
    </Form>
}