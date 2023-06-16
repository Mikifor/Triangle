import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Entries from "./Components/Entries/Entries";
import Formulas from "./Components/Formulas";
import Calculations from "./Components/Calculations/Calcuations"

const App = (props) => {

  return (

    <div className="App">
      <Sidebar />
      <div className="app-content">
        <Entries store={props.store}/>
        <Calculations />
        <Formulas />
      </div>
    </div>
  );
}
export default App;
