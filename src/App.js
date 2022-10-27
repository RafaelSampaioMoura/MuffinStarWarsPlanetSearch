import React, { useState } from 'react';
import MyContext from './context/MyContext';
import Header from './components/Header';
import Filter from './components/Filter';
import Table from './components/Table';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  const [tablePlanets, setTablePlanets] = useState([]);
  const [unknownPlanets, setUnknownPlanets] = useState([]);
  const foo = React.useMemo(
    () => ({
      planets,
      setPlanets,
      tablePlanets,
      setTablePlanets,
      unknownPlanets,
      setUnknownPlanets,
    }),
    [planets, tablePlanets, unknownPlanets],
  );
  return (
    <MyContext.Provider value={ foo }>
      <Header />
      <Filter />
      <Table />
    </MyContext.Provider>
  );
}

export default App;
