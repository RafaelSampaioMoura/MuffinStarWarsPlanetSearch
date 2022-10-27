import React from 'react';
import MyContext from '../context/MyContext';
import AppliedFilter from './AppliedFilter';
import OrganizedTable from './OrganizedTable';

function Filter() {
  const { planets, setTablePlanets } = React.useContext(MyContext);
  const [collumns, setCollumns] = React.useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const comparisons = ['maior que', 'menor que', 'igual a'];
  const [currentFilter, setCurrentFilter] = React.useState({
    collumn: 'population',
    comparison: 'maior que',
    number: 0,
  });
  const [appliedFilters, setAppliedFilters] = React.useState([]);
  const handleFiltering = (e) => {
    e.preventDefault();
    setAppliedFilters([...appliedFilters, currentFilter]);
    const newCollumns = collumns.filter(
      (collumn) => collumn !== currentFilter.collumn,
    );
    setCollumns([...newCollumns]);
    setCurrentFilter({ ...currentFilter, collumn: collumns[0] });
    // console.log(collumns);
  };
  // React.useEffect(() => {});
  // console.log(removedPlanets);
  return (
    <>
      <label htmlFor="column-filter">
        Collumn
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
          onChange={ (e) => {
            setCurrentFilter({ ...currentFilter, collumn: e.target.value });
          } }
        >
          {collumns.length > 0
            && collumns.map((collumn) => (
              <option value={ `${collumn}` } key={ collumn }>
                {collumn}
              </option>
            ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparison
        <select
          name="comparison-filter"
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (e) => {
            setCurrentFilter({ ...currentFilter, comparison: e.target.value });
          } }
        >
          {comparisons.length > 0
            && comparisons.map((comparison) => (
              <option value={ `${comparison}` } key={ comparison }>
                {comparison}
              </option>
            ))}
        </select>
      </label>
      <label htmlFor="value-filter">
        Value
        <input
          type="number"
          name="value-filter"
          id="value-filter"
          data-testid="value-filter"
          value={ currentFilter.number }
          onChange={ (e) => {
            setCurrentFilter({ ...currentFilter, number: e.target.value });
          } }
        />
      </label>
      <OrganizedTable />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ (e) => {
          handleFiltering(e);
        } }
      >
        Filtrar
      </button>
      {appliedFilters.length > 0 ? (
        appliedFilters.map((filter) => (
          <AppliedFilter
            key={ filter.collumn }
            appliedFilter={ filter }
            appliedFilters={ appliedFilters }
            setAppliedFilters={ setAppliedFilters }
            setCollumns={ setCollumns }
            collumns={ collumns }
          />
        ))
      ) : (
        <div>No Filters Applied</div>
      )}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => {
          const removeFilters = appliedFilters.map((filter) => filter.collumn);
          setAppliedFilters([]);
          setCollumns([...collumns, ...removeFilters]);
          setTablePlanets([...planets]);
        } }
      >
        Remover todas filtragens
      </button>
    </>
  );
}

export default Filter;
