var chai = require('chai');
var assert = chai.assert;
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
            assert.equal('US', checkCodes.convert('UNITED STATES'));
            assert.equal('RU', checkCodes.convert('Russia'));
            assert.equal('TZ', checkCodes.convert('Tanzania'));
            assert.equal('CD', checkCodes.convert('Congo (Dem. Rep.)'));
            assert.equal('CG', checkCodes.convert('Congo (Rep.)'));
            assert.equal('ST', checkCodes.convert('Sao Tome & Principe'));
            assert.equal('GW', checkCodes.convert('Guinea Bissau'));
            assert.equal('KR', checkCodes.convert('Korea (South)'));
            assert.equal('KP', checkCodes.convert('Korea (North)'));
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

    describe('all countries from countrycode.org', function () {
        it('should be mapped', function () {
            var countries = 'Afghanistan,Albania,Algeria,American Samoa,Andorra,Angola,Anguilla,Antarctica,Antigua and Barbuda,Argentina,Armenia,Aruba,Australia,Austria,Azerbaijan,Bahamas,Bahrain,Bangladesh,Barbados,Belarus,Belgium,Belize,Benin,Bermuda,Bhutan,Bolivia,Bosnia and Herzegovina,Botswana,Brazil,British Indian Ocean Territory,British Virgin Islands,Brunei,Bulgaria,Burkina Faso,Burundi,Cambodia,Cameroon,Canada,Cape Verde,Cayman Islands,Central African Republic,Chad,Chile,China,Christmas Island,Cocos Islands,Colombia,Comoros,Cook Islands,Costa Rica,Croatia,Cuba,Curacao,Cyprus,Czech Republic,Democratic Republic of the Congo,Denmark,Djibouti,Dominica,Dominican Republic,East Timor,Ecuador,Egypt,El Salvador,Equatorial Guinea,Eritrea,Estonia,Ethiopia,Falkland Islands,Faroe Islands,Fiji,Finland,France,French Polynesia,Gabon,Gambia,Georgia,Germany,Ghana,Gibraltar,Greece,Greenland,Grenada,Guam,Guatemala,Guernsey,Guinea,Guinea-Bissau,Guyana,Haiti,Honduras,Hong Kong,Hungary,Iceland,India,Indonesia,Iran,Iraq,Ireland,Isle of Man,Israel,Italy,Ivory Coast,Jamaica,Japan,Jersey,Jordan,Kazakhstan,Kenya,Kiribati,Kosovo,Kuwait,Kyrgyzstan,Laos,Latvia,Lebanon,Lesotho,Liberia,Libya,Liechtenstein,Lithuania,Luxembourg,Macau,Macedonia,Madagascar,Malawi,Malaysia,Maldives,Mali,Malta,Marshall Islands,Mauritania,Mauritius,Mayotte,Mexico,Micronesia,Moldova,Monaco,Mongolia,Montenegro,Montserrat,Morocco,Mozambique,Myanmar,Namibia,Nauru,Nepal,Netherlands,Netherlands Antilles,New Caledonia,New Zealand,Nicaragua,Niger,Nigeria,Niue,North Korea,Northern Mariana Islands,Norway,Oman,Pakistan,Palau,Palestine,Panama,Papua New Guinea,Paraguay,Peru,Philippines,Pitcairn,Poland,Portugal,Puerto Rico,Qatar,Republic of the Congo,Reunion,Romania,Russia,Rwanda,Saint Barthelemy,Saint Helena,Saint Kitts and Nevis,Saint Lucia,Saint Martin,Saint Pierre and Miquelon,Saint Vincent and the Grenadines,Samoa,San Marino,Sao Tome and Principe,Saudi Arabia,Senegal,Serbia,Seychelles,Sierra Leone,Singapore,Sint Maarten,Slovakia,Slovenia,Solomon Islands,Somalia,South Africa,South Korea,South Sudan,Spain,Sri Lanka,Sudan,Suriname,Svalbard and Jan Mayen,Swaziland,Sweden,Switzerland,Syria,Taiwan,Tajikistan,Tanzania,Thailand,Togo,Tokelau,Tonga,Trinidad and Tobago,Tunisia,Turkey,Turkmenistan,Turks and Caicos Islands,Tuvalu,U.S. Virgin Islands,Uganda,Ukraine,United Arab Emirates,United Kingdom,United States,Uruguay,Uzbekistan,Vanuatu,Vatican,Venezuela,Vietnam,Wallis and Futuna,Western Sahara,Yemen,Zambia,Zimbabwe'.split(',');
            countries.forEach(function (countryName) {
                assert.notEqual(null, checkCodes.convert(countryName));
            });
        });
    });

    describe('abbreviation for UK', function () {
        it('should convert from abbreviation of UK code', function () {
            assert.equal('GB', checkCodes.convert('UK'));
            assert.equal('GB', checkCodes.convert('U.K.'));
            assert.equal('GB', checkCodes.convert('U.K'));
        });
    });

    describe('convert country name to ISO 3166', function () {
        it('should be convertible', function () {
            assert.equal('Vatican City State', checkCodes.iso('Vatican'));
            assert.equal('Russian Federation', checkCodes.iso('Russia'));
        });
    });
});
