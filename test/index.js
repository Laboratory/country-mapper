var assert = require('chai').assert;
var checkCodes = require('../index');

describe('Codes', function () {

    describe('check Veeam', function () {
        it('Veeam specific countries should be found', function () {
            assert.equal('BQ', checkCodes.convert('Bonaire'));
            assert.equal('MO', checkCodes.convert('Macau'));
            assert.equal('CV', checkCodes.convert('Cape Verde'));
            assert.equal('MK', checkCodes.convert('Macedonia'));
        });
    });

    describe('converter', function () {
        it('should convert from Country to specific code', function () {
            assert.equal('RU', checkCodes.convert('Russian Federation'));
            assert.equal('CD', checkCodes.convert('Congo, The Democratic Republic of'));
        });
        it('should return null for unknown country', function () {
            assert.equal(null, checkCodes.convert('Unknown'));
        });
    });

    describe('abbreviation', function () {
        it('should convert from abbreviation of Country to specific code', function () {
            assert.equal('US', checkCodes.convert('USA'));
        });
    });
});
