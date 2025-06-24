import { act, render, screen } from '@testing-library/react';
import HookTimer from '../chap07/HookTimer';

describe('HookTimer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('setInterval', async () => {
    const { debug } = render(<HookTimer init={10} />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    const counter = screen.getByText(/現在のカウント/);
    debug(counter);
    expect(counter).toHaveTextContent('9');
  });
});