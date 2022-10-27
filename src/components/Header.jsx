import React from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const { planets, setTablePlanets } = React.useContext(MyContext);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    const handleFilterPlanets = () => {
      const filteredPlanets = planets.filter((planet) => planet.name
        .toLowerCase()
        .includes(search));
      setTablePlanets([...filteredPlanets]);
    };

    handleFilterPlanets();
  }, [search, planets, setTablePlanets]);

  return (
    <div>
      Projeto Star Wars - Trybe
      <input
        type="text"
        name="name-filter"
        id="name-filter"
        data-testid="name-filter"
        onChange={ (e) => {
          setSearch(e.target.value);
        } }
      />
    </div>
  );
}

export default Header;
