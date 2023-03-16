import React, {useState} from "react";
import "./CostForm.css";

const CostForm = () => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');


    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        console.log(costData)

        setInputName("");
        setInputAmount("");
        setInputDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input onChange={nameChangeHandler} type="text" value={inputName}/>
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input onChange={amountChangeHandler} type="number" value={inputAmount} min="0.01" step="0.01"/>
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input onChange={dateChangeHandler} type="date" value={inputDate} min="2020-01-01"
                           step="2023-12-31"/>
                </div>
                <div className="new-cost__actions">
                    <button>Добавить расход</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;
