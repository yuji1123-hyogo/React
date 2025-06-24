import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StateBasic from '../chap03/StateBasic';

test('StateBasic Test', async () => {
  const ev = userEvent.setup();
  render(<StateBasic init={0} />);
  const btn = screen.getByRole('button', { name: 'カウント' });
  const cnt = screen.getByText(/クリック/);
  ev.click(btn);
  await waitFor(() => { expect(cnt).toHaveTextContent('1回'); });
});