import React, {useState} from "react";
import CostDate from "./CostDate";
import "./CostItem.css";
import Card from "../UI/Card";


const CostItem = (props) => {
    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandler = () => {
        setDescription('New description');
    }

    return (
        <Card className="cost-item">
            <CostDate date={props.date}/>
            <div className="cost-item__description">
                <h2>{description}</h2>
                <div className="cost-item__price">$
                    {props.amount}
                </div>
                <button onClick={changeDescriptionHandler}>Изменить описание</button>
            </div>
        </Card>
    )
}

export default CostItem;
