import { getTriangleArea } from './MyUtil';

describe('getTriangleArea関数', () => {
  beforeEach(() => {
    console.log(new Date().toLocaleString());
  });

  test('正常パターン', () => {
    expect(getTriangleArea(10, 2)).toBe(10);
  });
});