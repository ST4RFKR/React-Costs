import './NewCost.css'
import CostForm from "./CostForm/CostForm";
import {useState} from "react";



function NewCost(props) {

    const [isFormVisible, setIsFormVisible] = useState(false)
    function SaveCostDataHandler (inputCostData) {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
    props.onAddCost(costData)
    }
function inputCostDataHandler () {
        setIsFormVisible(true)
}
function cancelFormHandler () {
        setIsFormVisible(false)
}
    return <div className="new-cost">
        {!isFormVisible ? <button onClick={inputCostDataHandler}>Add new cost!</button> :  <CostForm onCancelForm={cancelFormHandler}  onSaveCostData={SaveCostDataHandler}/>}


    </div>
}
export default NewCost;
