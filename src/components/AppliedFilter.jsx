import PropTypes from 'prop-types';
import React from 'react';
import MyContext from '../context/MyContext';

function AppliedFilter(props) {
  const {
    appliedFilter,
    appliedFilters,
    setAppliedFilters,
    setCollumns,
    collumns,
  } = props;
  const { tablePlanets, setTablePlanets } = React.useContext(MyContext);
  const [removedPlanets, setRemovedPlanets] = React.useState([]);
  React.useEffect(() => {
    const filtering = () => {
      if (appliedFilter.comparison === 'maior que') {
        const newPlanets = tablePlanets.filter(
          (planet) => {
            const collumnNumber = Number(planet[appliedFilter.collumn]);
            const filterNumber = Number(appliedFilter.number);
            const bigger = collumnNumber > filterNumber;
            return bigger;
          },
        );
        const filteredOutPlanets = tablePlanets.filter(
          (planet) => !newPlanets.includes(planet),
        );
        setTablePlanets([...newPlanets]);
        setRemovedPlanets([...removedPlanets, ...filteredOutPlanets]);
      }
      if (appliedFilter.comparison === 'menor que') {
        const newPlanets = tablePlanets.filter(
          (planet) => {
            const collumnNumber = Number(planet[appliedFilter.collumn]);
            const filterNumber = Number(appliedFilter.number);
            const smaller = collumnNumber < filterNumber;
            return smaller;
          },
        );
        const filteredOutPlanets = tablePlanets.filter(
          (planet) => !newPlanets.includes(planet),
        );
        setTablePlanets([...newPlanets]);
        setRemovedPlanets([...removedPlanets, ...filteredOutPlanets]);
      }
      if (appliedFilter.comparison === 'igual a') {
        const newPlanets = tablePlanets.filter(
          (planet) => Number(planet[appliedFilter.collumn])
            === Number(appliedFilter.number),
        );
        const filteredOutPlanets = tablePlanets.filter(
          (planet) => !newPlanets.includes(planet),
        );
        setTablePlanets([...newPlanets]);
        setRemovedPlanets([...removedPlanets, ...filteredOutPlanets]);
      }
    };
    filtering();
  }, []);
  console.log(removedPlanets);
  const { collumn, comparison, number } = appliedFilter;
  return (
    <div data-testid="filter">
      <div>{`${collumn} ${comparison} ${number}`}</div>
      <button
        key={ Math.random() }
        type="button"
        onClick={ () => {
          const reapplyFilters = appliedFilters.filter(
            (aFilter) => aFilter.collumn !== appliedFilter.collumn,
          );
          setAppliedFilters([...reapplyFilters]);
          setCollumns([...collumns, appliedFilter.collumn]);
          setTablePlanets([...tablePlanets, ...removedPlanets]);
          console.log(collumns);
        } }
      >
        &#128465;
      </button>
    </div>
  );
}

AppliedFilter.propTypes = {
  appliedFilter: PropTypes.shape({
    collumn: PropTypes.string,
    comparison: PropTypes.string,
    number: PropTypes.number,
  }).isRequired,
  appliedFilters: PropTypes.shape({
    filter: PropTypes.func,
  }).isRequired,
  collumns: PropTypes.shape([]).isRequired,
  setAppliedFilters: PropTypes.func.isRequired,
  setCollumns: PropTypes.func.isRequired,
};

export default AppliedFilter;
