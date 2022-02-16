import { render } from '@testing-library/react';
import Square from './Square';

it('renders row and column indicators', () => {
  const row = 1;
  const column = 2;
  const square = render(<Square row={row} column={column}/>);
  expect(square.getByText(row.toString()+column.toString())).toBeInTheDocument();
});
