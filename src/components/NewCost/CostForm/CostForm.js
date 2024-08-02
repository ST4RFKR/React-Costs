import './CostForm.css'
import {useState} from "react";
function CostForm (props) {


    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

   // const [userInput, setUserInput] = useState({
   //      name: '',
   //      amount: '',
   //      date: ''
   //  });

    function nameChangeHandler (e) {
        setInputName(e.target.value)
   // setUserInput({...userInput, name : e.target.value});
   //      setUserInput((prevState) => {
   //          return {
   //              ...prevState, name: e.target.value
   //          }
   //      })
   //      console.log(userInput);
    }
    function amountChangeHandler (e) {
        setInputAmount(e.target.value)
 // setUserInput({...userInput, amount : e.target.value});
 //        console.log(userInput);
    }
    function dateChangeHandler (e) {
        setInputDate(e.target.value)
// setUserInput({...userInput,date : e.target.value});
//         console.log(userInput);
    }
    function submitHandler (e) {
        e.preventDefault();
        const costData = {
            description : inputName,
            amount : inputAmount,
            date: new Date(inputDate)
        }
        props.onSaveCostData(costData)
        setInputName('');
        setInputAmount('')
        setInputDate('')
    props.onCancelForm();

    }
    return <form onSubmit={submitHandler} >
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Name</label>
                <input type="text" value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Amount of money</label>
                <input type="number" value={inputAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Date</label>
                <input type="date" min={2023-12-31} value={inputDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-cost__actions">
            <button type={"submit"}>Add new cost!</button>
            <button type={"button"} onClick={props.onCancelForm}>Cancel</button>
        </div>
    </form>
}

export default CostForm;
