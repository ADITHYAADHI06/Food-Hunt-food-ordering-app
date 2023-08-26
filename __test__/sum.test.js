import { sum } from "../src/sum"

test('sun function writes sum of two numbers', () => {

    let result = sum(4, 4)
    // Asseration
    expect(result).toBe(8);
})