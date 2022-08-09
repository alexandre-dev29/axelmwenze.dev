import { render } from '@testing-library/react';

import WorkCard from './work-card';

describe('WorkCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkCard />);
    expect(baseElement).toBeTruthy();
  });
});
