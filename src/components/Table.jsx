import React from "react";
import MyContext from "../context/MyContext";

function Table() {
  const { planets, setPlanets, tablePlanet, setTablePlanet } =
    React.useContext(MyContext);

  React.useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/planets");
        const json = await response.json();
        const data = await json.results;
        setPlanets([...data]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPlanets();
  }, [setPlanets]);
  console.log(planets);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {planets.length > 0 && planets.map((planet) => {
          return (
            <tr key={planet.name}>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;