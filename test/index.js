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
            assert.equal('RU', checkCodes.convert('Russia'));
            assert.equal('TZ', checkCodes.convert('Tanzania'));
            assert.equal('CD', checkCodes.convert('Congo (Dem. Rep.)'));
            assert.equal('CG', checkCodes.convert('Congo (Rep.)'));
            assert.equal('ST', checkCodes.convert('Sao Tome & Principe'));
            assert.equal('GW', checkCodes.convert('Guinea Bissau'));
            assert.equal('KP', checkCodes.convert('Korea (South)'));
            assert.equal('KR', checkCodes.convert('Korea (North)'));
            assert.equal('SY', checkCodes.convert('Syria'));
            assert.equal('BN', checkCodes.convert('Brunei'));
            assert.equal('LA', checkCodes.convert('Laos'));
            assert.equal('IR', checkCodes.convert('Iran'));
            assert.equal('LC', checkCodes.convert('Lucia'));
            assert.equal('LC', checkCodes.convert('St Lucia'));
            assert.equal('AG', checkCodes.convert('Antigua & Barbuda'));
            assert.equal('KN', checkCodes.convert('St Kitts & Nevis'));
            assert.equal('AS', checkCodes.convert('Samoa (American)'));
            assert.equal('WS', checkCodes.convert('Samoa (western)'));
            assert.equal('CI', checkCodes.convert('Cote d\'Ivoire'));
        });
    });

    describe('abbreviation for UK', function () {
        it('should convert from abbreviation of UK code', function () {
            assert.equal('GB', checkCodes.convert('UK'));
            assert.equal('GB', checkCodes.convert('U.K.'));
            assert.equal('GB', checkCodes.convert('U.K'));
        });
    });
});
