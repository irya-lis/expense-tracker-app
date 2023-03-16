import React from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
    const cost = [
        {
            date: new Date(2021, 2, 12),
            description: 'Холодильник',
            amount: 999.99
        },
        {
            date: new Date(2020, 1, 4),
            description: 'Мыло',
            amount: 0.87
        },
        {
            date: new Date(2019, 8, 24),
            description: 'Телевизор',
            amount: 787.8
        }
    ]
    return (
        <div>
            <NewCost/>
            <Costs cost={cost}/>

        </div>
    )
}

export default App;
