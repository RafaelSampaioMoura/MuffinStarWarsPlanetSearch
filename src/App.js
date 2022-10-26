import React, { useState } from "react";
import MyContext from "./context/MyContext";
import Header from "./components/Header";
import Filter from "./components/Filter";
import AppliedFilter from "./components/AppliedFilter";
import Table from "./components/Table";
import "./App.css";

function App() {
  const [planets, setPlanets] = useState([]);
  const [tablePlanets, setTablePlanets] = useState([]);

  return (
    <MyContext.Provider
      value={{ planets, setPlanets, tablePlanets, setTablePlanets }}
    >
      <Header></Header>
      <Filter></Filter>
      <AppliedFilter></AppliedFilter>
      <Table></Table>
    </MyContext.Provider>
  );
}

export default App;
