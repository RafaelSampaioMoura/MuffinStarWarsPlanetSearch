import React from "react";
import MyContext from "../context/MyContext";

function Header() {
  const { planets, setPlanets, tablePlanets, setTablePlanets } = React.useContext(MyContext);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const handleFilterPlanets = () => {
      const filteredPlanets = planets.filter((planet) => {
        return planet.name.toLowerCase().includes(search);
      });
      setTablePlanets([...filteredPlanets]);
    };
    
    handleFilterPlanets();
  }, [search]);


  return (
    <div>
      Projeto Star Wars - Trybe
      <input
        type="text"
        name="name-filter"
        id="name-filter"
        data-testid="name-filter"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default Header;
