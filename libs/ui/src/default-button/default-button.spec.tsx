import { render } from '@testing-library/react';

import DefaultButton from './default-button';

describe('DefaultButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefaultButton />);
    expect(baseElement).toBeTruthy();
  });
});
