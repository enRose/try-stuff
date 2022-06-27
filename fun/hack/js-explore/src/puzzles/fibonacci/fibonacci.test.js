import { genFibonacci, isFibonacci } from './index'


test('renders learn react link', () => {
  const f = genFibonacci(10)

  const result = isFibonacci(f)

  expect(result).toBeTruthy()
})