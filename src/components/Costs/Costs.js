import CostItem from "./CostItem/CostItem";
import './Costs.css'
import Card from "../Card/Card";
import CostsFilter from "./CostsFilter/CostsFilter";
import {useState} from "react";
import CostList from "./CostList/CostList";
import CostsDiagram from "./CostsDiagram/CostsDiagram";


function Costs (props) {
    const [selectedYear, setSelectedYear] = useState('2024');

    function yearChangeHandler(year) {
        setSelectedYear(year);
    }

    const filteredCosts = props.data.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear
    })

    return (<div>
            <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
                <CostsDiagram costs={filteredCosts}/>
                <CostList costs={filteredCosts}/>

                {/*<CostItem date={ props.data[0].date} description={props.data[0].description} amount={props.data[0].amount}/>*/}
                {/*<CostItem date={ props.data[1].date} description={props.data[1].description} amount={props.data[1].amount}/>*/}
                {/*<CostItem date={ props.data[2].date} description={props.data[2].description} amount={props.data[2].amount}/>*/}
            </Card>
        </div>
    )
}

export default Costs;
