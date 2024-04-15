import { useState } from "react";
import "./App.css";
import moneyList from "./component/moneyList";
import QuestionList from "./component/questionList";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <div className="App">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
        <QuestionList/>
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyList.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
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
