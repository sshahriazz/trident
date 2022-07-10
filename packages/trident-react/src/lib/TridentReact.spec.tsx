import { render } from '@testing-library/react';

import TridentReact from './TridentReact';

describe('TridentReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TridentReact />);
    expect(baseElement).toBeTruthy();
  });
});
