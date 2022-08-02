import { render } from '@testing-library/react';

import AppWrapper from './app-wrapper';

describe('AppWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
