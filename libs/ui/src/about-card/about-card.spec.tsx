import { render } from '@testing-library/react';

import AboutCard from './about-card';

describe('AboutCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutCard />);
    expect(baseElement).toBeTruthy();
  });
});
