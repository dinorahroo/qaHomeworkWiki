//first step is function followed by the name of the function
// == checking two sides are the same value 5 == 5
// === checking both sides are same type 'five' === 5
function stringCheck(x) {
    return typeof x == 'string';
};

function numberCheck(x) {
    return typeof x == 'number';
};

function booleanCheck(x) {
    return typeof x == 'boolean';
};

//tests

describe('value testing'), () => {
    test('strings are strings',  () => {
        expect(stringCheck('Functions are fun.')).toBeTrruthy();
        expect(stringCheck(500)).toBeFalsy();

    });
    test('numbers should be numbers', () => {
        expect(numberCheck(1000)).toBeTruthy();
        expect(numberCheck(true)).toBeFalsy();
    });
    test('boolean works', () => {
        expect(booleanCheck(5<10)).toBeTruthy();
        expect(booleanCheck('false')).toBeFalsy();
    })
}

