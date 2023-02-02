import React from 'react';
import { findByTestId, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testes de requisitos', () => {
  jest.setTimeout(30000);
  test('30%', async () => {
    render(<App />);

    const header = screen.getByTestId('name-filter');
    // console.log(header);
    const planetTable = await screen.findAllByTestId('planet-name', {}, { timeout: 10000});
    const collumnInput = screen.getByTestId('column-filter');
    const comparisonInput = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    const btnFilter = screen.getByTestId('button-filter');

    expect(header).toBeInTheDocument();
    // expect(planetTable).toBeInTheDocument();
    expect(planetTable.length).toBe(10);
    expect(collumnInput).toBeInTheDocument();
    expect(comparisonInput).toBeInTheDocument();
    expect(valueInput).toBeInTheDocument();
    expect(btnFilter).toBeInTheDocument();

    userEvent.type(header, 'Alderaan');

    const tatooine = await screen.findByTestId('name-filter');
    expect(tatooine).toBeInTheDocument();
  })
})
