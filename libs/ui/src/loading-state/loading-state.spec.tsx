import { render } from '@testing-library/react';

import LoadingState from './loading-state';

describe('LoadingState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadingState />);
    expect(baseElement).toBeTruthy();
  });
});
