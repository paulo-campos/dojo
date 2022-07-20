import { render } from '@testing-library/react';

import Header from '../';

describe('Header', () => {
  it('should render correctly', () => {
    const { container } = render(<Header>Header</Header>);

    expect(container).toMatchSnapshot();
  });

  it('should render the right children property', () => {
    const title = 'Header';
    const { container } = render(<Header>{title}</Header>);

    expect(container.textContent).toEqual(title);
  });

  it('should render "Arcotech" into the content when children property is empty', () => {
    const { container } = render(<Header />);

    expect(container.textContent).toEqual('Arcotech');
  });

  it('should render the right background using the color property', () => {
    const color = 'primary';
    
    render(<Header color={color}>'Header'</Header>);

    const header = document.body.getElementsByClassName(`background__${color}`);

    expect(header.length).toEqual(1);
  });
});