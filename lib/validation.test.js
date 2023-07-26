const { colorValidation, logoTextValidation } = require('./validation.js');

//Various tests for the validation functions
describe('colorValidation', () => {
    test('should return true if input is a valid color string', () => {
        const input = 'red';
        const expected = true;
        const actual = colorValidation(input);
        expect(actual).toBe(expected);
    });
    
    test('should return true if input is a valid hex code', () => {
        const input = '#FF0000';
        const expected = true;
        const actual = colorValidation(input);
        expect(actual).toBe(expected);
    });
    
    test('should return error message if input is not a valid color string or hex code', () => {
        const input = 'not a color';
        const expected = 'Must be a valid color string or hex code';
        const actual = colorValidation(input);
        expect(actual).toBe(expected);
    });
});
 
describe('logoTextValidation', () => {
    test('should return true if input is between 1 and 3 characters', () => {
        const input = 'ABC';
        const expected = true;
        const actual = logoTextValidation(input);
        expect(actual).toBe(expected);
    });
    
    test('should return error message if input is not between 1 and 3 characters', () => {
        const input = 'ABCD';
        const expected = 'Must be between 1 and 3 characters';
        const actual = logoTextValidation(input);
        expect(actual).toBe(expected);
    });
 });