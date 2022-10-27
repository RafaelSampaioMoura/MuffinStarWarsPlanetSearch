import React from 'react';
import MyContext from '../context/MyContext';

function OrganizedTable() {
  const { tablePlanets, setTablePlanets } = React.useContext(MyContext);
  const [order, setOrder] = React.useState({
    column: 'population',
    sort: 'ASC',
  });
  const handleUknowns = (table) => {
    const removedUknowns = table.filter((planet) => planet[order.column] === 'unknown');
    console.log(removedUknowns);
    const withoutUnknown = table.filter((planet) => planet[order.column] !== 'unknown');
    console.log(withoutUnknown);
    setTablePlanets([withoutUnknown, removedUknowns]);
  };
  console.log(tablePlanets);
  return (
    <>
      <label htmlFor="column-sort">
        <select
          name="column-sort"
          id="column-sort"
          data-testid="column-sort"
          onChange={ (e) => {
            setOrder({ ...order, column: e.target.value });
          } }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="column-sort-input-asc">
        <input
          type="radio"
          name="column-sort-input"
          id="column-sort-input-asc"
          data-testid="column-sort-input-asc"
          value="ASC"
          onClick={ (e) => {
            setOrder({ ...order, sort: e.target.value });
          } }
        />
        Ascendente
      </label>
      <label htmlFor="column-sort-input-desc">
        <input
          type="radio"
          name="column-sort-input"
          id="column-sort-input-desc"
          data-testid="column-sort-input-desc"
          value="DESC"
          onClick={ (e) => {
            setOrder({ ...order, sort: e.target.value });
          } }
        />
        Descendente
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => {
          if (order.sort === 'ASC') {
            const orginizedTable = tablePlanets.sort(
              (a, b) => Number(a[order.column]) - Number(b[order.column]),
            );
            handleUknowns(orginizedTable);
          }

          if (order.sort === 'DESC') {
            const orginizedTable = tablePlanets.sort(
              (a, b) => Number(b[order.column]) - Number(a[order.column]),
            );
            handleUknowns(orginizedTable);
          }
        } }
      >
        Ordernar
      </button>
    </>
  );
}

export default OrganizedTable;
