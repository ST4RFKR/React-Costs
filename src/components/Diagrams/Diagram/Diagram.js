import React from 'react';
import DiagramBar from "./DiagramBar/DiagramBar";
import './Diagram.css'


function Diagram (props){
    const costAmountArray = props.dataSets.map(dataSet => dataSet.value)
    const maxMonthCosts = Math.max(...costAmountArray);

    return (
        <div className="diagram">
            {props.dataSets.map(dataSet =>
                <DiagramBar
                    key={dataSet.label}
                    value={dataSet.value}
                    maxValue={maxMonthCosts}
                    label={dataSet.label}
                />)}
        </div>
    );
};

export default Diagram;
