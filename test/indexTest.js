const assert = require('chai').assert;
const app = require('../index');

describe('Remove Schema', function () {
    let urls = [
        'http://achilleskal.com',
        'https://achilleskal.com'
    ];

    urls.forEach(value => {
        it(`${value} should return achilleskal.com`, () => {
            assert.equal(app.extractUrl(value), 'achilleskal.com');
        })
    });


});