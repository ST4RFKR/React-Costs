
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";
import AddNewCost from "./components/AddNewCost/AddNewCost";




const INITIAL_COSTS = [{
  id: Math.random().toString(),
  date:new Date(2021, 2,12),
  description : 'Холодильник',
  amount : 999.99
},
  {
    id: Math.random().toString(),
    date:new Date(2022, 4,22),
    description : 'MacBook',
    amount : 999.99
  },{
    id: Math.random().toString(),
    date:new Date(2023, 11,30),
    description : 'Jeans',
    amount : 929.99
  },{
    id: Math.random().toString(),
    date:new Date(2023, 10,30),
    description : 'Phone',
    amount : 999.99
  }]

function App() {

  const [costs, setCost] = useState(INITIAL_COSTS);


  function addCostHandler(cost) {

    setCost(prevCost => {
      return [cost, ...prevCost]
    })
  }
  return (
<div>
<NewCost onAddCost={addCostHandler}/>
<Costs data={costs}/>
</div>
  );
}

export default App;
