import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import QueryPre from '../chap06/QueryPre';

describe('QuryPre (Mock)', () => {
  const server = setupServer(
    rest.get('https://api.openweathermap.org/data/2.5/weather',
      async (req, res, context) =>
        res(
          context.status(200),
          context.json({
            weather: [
              { icon: '4n', main: 'Clouds', description: '曇り' }
            ]
          })
        )
    )
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('モックを利用したテスト', async () => {
    const {debug, baseElement} = await render(<QueryPre />);
    const img = await screen.findByRole('img', {}, { timeout: 3000 });
    expect(img).toHaveAttribute('alt', 'Clouds');
    debug(baseElement);
  });
});
