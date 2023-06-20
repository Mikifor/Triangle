import React from 'react';
import './App.css';
import Entries from "./Components/Entries/Entries";
import Formulas from "./Components/Formulas";
import Calculations from "./Components/Calculations/Calcuations"

const App = (props) => {

  return (

    <div className="App">
      <div className="app-content">
        <Entries store={props.store}/>
        <Calculations store={props.store}/>
        <Formulas />
      </div>
    </div>
  );
}
export default App;
