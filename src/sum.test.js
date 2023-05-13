import add from './sum'
describe('sum.js', () => {
    test('add two numbers', () => {
        expect(add(1, 0)).toBe(1)
    })
})