import "./App.css";
import moneyList from "./component/moneyList";

function App() {
  return (
    <div className="App">
      <div className="main">main</div>
      <div className="pyramid">
        <ul className="moneyList">
        {moneyList.map((m)=>(
          <li className="moneyListItem ">
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
        ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
