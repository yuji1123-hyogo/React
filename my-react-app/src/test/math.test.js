import { add, multiply } from '../math'

test('1+2は3になる', () => {
  expect(add(1, 2)).toBe(3)
})

test('3*4は12になる', () => {
  expect(multiply(3, 4)).toBe(12)
})
