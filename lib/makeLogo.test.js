const { makeLogo } = require('./makeLogo');

describe('makeLogo', () => {
    test('should return a string', () => {
        const response = {
            logoShape: 'circle',
            logoBackgroundColor: 'red',
            logoText: 'ABC',
            logoTextColor: 'blue'
        };
        const expected = 'string';
        const actual = typeof makeLogo(response);
        expect(actual).toBe(expected);
    });

    test('should return a string that starts with <svg', () => {
        const response = {
            logoShape: 'circle',
            logoBackgroundColor: 'red',
            logoText: 'ABC',
            logoTextColor: 'blue'
        };
        const expected = '<svg';
        const actual = makeLogo(response).substring(0, 4);
        expect(actual).toBe(expected);
    })
});
 