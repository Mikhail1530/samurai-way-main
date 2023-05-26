import { sum } from "./function";


const a = 1;
const b = 3;
const c = 5;

test('sum should be correct', () => {
    const result = sum(a, b)

    expect(result).toBe(4)
})

