// const fizzbuzz = require('./fizzbuzz');
import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
    test('should return 1 if recieves 1', () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);

    })

    test('should return fizz if recieves a 3 divisor', () => {
        const expected = 'fizz';
        const result = fizzbuzz(6);
        expect(expected).toBe(result);
    })

    test('shoud return buzz if recieves a 5 divisor', () => {
        const expected = 'buzz';
        const result = fizzbuzz(10);
        expect(expected).toBe(result);
    })

    test('shoud return fizzbuzz if recieves a 3 and 5 divisor', () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    })
})