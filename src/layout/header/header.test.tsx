import { render } from '@testing-library/react';
import Header from '.';
import { headerProps } from './mock-data';

it('render Header correctly', () => {
  const { getAllByRole } = render(<Header {...headerProps} />);
  const element = getAllByRole('presentation')[0];

  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
