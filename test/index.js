const chai = require('chai')
const assert = chai.assert
const checkCodes = require('../index')
const mocha = require('mocha')

mocha.describe('Codes', () => {
  mocha.describe('check Veeam', () => {
    mocha.it('Veeam specific countries should be found', () => {
      assert.equal('BQ', checkCodes.convert('Bonaire'))
      assert.equal('MO', checkCodes.convert('Macau'))
      assert.equal('CV', checkCodes.convert('Cape Verde'))
      assert.equal('MK', checkCodes.convert('Macedonia'))
    })
  })

  mocha.describe('converter', () => {
    mocha.it('should convert from Country to specific code', () => {
      assert.equal('RU', checkCodes.convert('Russian Federation'))
      assert.equal('MK', checkCodes.convert('Republic of Macedonia'))
      assert.equal('MK', checkCodes.convert('Macedonia'))
      assert.equal('CD', checkCodes.convert('Congo, The Democratic Republic of'))
      assert.equal('SJ', checkCodes.convert('Jan Mayen'))
    })
    mocha.it('should return null for unknown country', () => {
      assert.equal(null, checkCodes.convert('Unknown'))
      assert.equal(null, checkCodes.convert(null))
      assert.equal(null, checkCodes.convert(undefined))
    })
    mocha.it('should convert case insensitive county name to code', () => {
      assert.equal('RU', checkCodes.convert('russia'))
      assert.equal('US', checkCodes.convert('usa'))
      assert.equal('US', checkCodes.convert('uniTed stAteS'))
    })
  })

  mocha.describe('abbreviation', () => {
    mocha.it('should convert from abbreviation of Country to specific code', () => {
      assert.equal('US', checkCodes.convert('USA'))
      assert.equal('US', checkCodes.convert('United States of America'))
      assert.equal('US', checkCodes.convert('UNITED STATES'))
      assert.equal('RU', checkCodes.convert('Russia'))
      assert.equal('TZ', checkCodes.convert('Tanzania'))
      assert.equal('CD', checkCodes.convert('Congo (Dem. Rep.)'))
      assert.equal('CG', checkCodes.convert('Congo (Rep.)'))
      assert.equal('ST', checkCodes.convert('Sao Tome & Principe'))
      assert.equal('GW', checkCodes.convert('Guinea Bissau'))
      assert.equal('KR', checkCodes.convert('Korea (South)'))
      assert.equal('KP', checkCodes.convert('Korea (North)'))
      assert.equal('SY', checkCodes.convert('Syria'))
      assert.equal('BN', checkCodes.convert('Brunei'))
      assert.equal('LA', checkCodes.convert('Laos'))
      assert.equal('IR', checkCodes.convert('Iran'))
      assert.equal('LC', checkCodes.convert('Lucia'))
      assert.equal('LC', checkCodes.convert('St Lucia'))
      assert.equal('AG', checkCodes.convert('Antigua & Barbuda'))
      assert.equal('KN', checkCodes.convert('St Kitts & Nevis'))
      assert.equal('AS', checkCodes.convert('Samoa (American)'))
      assert.equal('WS', checkCodes.convert('Samoa (western)'))
      assert.equal('CI', checkCodes.convert('Cote d\'Ivoire'))
    })
  })

  mocha.describe('all countries from countrycode.org', () => {
    mocha.it('should be mapped', () => {
      let countries = 'Afghanistan,Albania,Algeria,American Samoa,Andorra,Angola,Anguilla,Antarctica,Antigua and Barbuda,Argentina,Armenia,Aruba,Australia,Austria,Azerbaijan,Bahamas,Bahrain,Bangladesh,Barbados,Belarus,Belgium,Belize,Benin,Bermuda,Bhutan,Bolivia,Bosnia and Herzegovina,Botswana,Brazil,British Indian Ocean Territory,British Virgin Islands,Brunei,Bulgaria,Burkina Faso,Burundi,Cambodia,Cameroon,Canada,Cape Verde,Cayman Islands,Central African Republic,Chad,Chile,China,Christmas Island,Cocos Islands,Colombia,Comoros,Cook Islands,Costa Rica,Croatia,Cuba,Curacao,Cyprus,Czech Republic,Democratic Republic of the Congo,Denmark,Djibouti,Dominica,Dominican Republic,East Timor,Ecuador,Egypt,El Salvador,Equatorial Guinea,Eritrea,Estonia,Ethiopia,Falkland Islands,Faroe Islands,Fiji,Finland,France,French Polynesia,Gabon,Gambia,Georgia,Germany,Ghana,Gibraltar,Greece,Greenland,Grenada,Guam,Guatemala,Guernsey,Guinea,Guinea-Bissau,Guyana,Haiti,Honduras,Hong Kong,Hungary,Iceland,India,Indonesia,Iran,Iraq,Ireland,Isle of Man,Israel,Italy,Ivory Coast,Jamaica,Japan,Jersey,Jordan,Kazakhstan,Kenya,Kiribati,Kosovo,Kuwait,Kyrgyzstan,Laos,Latvia,Lebanon,Lesotho,Liberia,Libya,Liechtenstein,Lithuania,Luxembourg,Macau,Macedonia,Madagascar,Malawi,Malaysia,Maldives,Mali,Malta,Marshall Islands,Mauritania,Mauritius,Mayotte,Mexico,Micronesia,Moldova,Monaco,Mongolia,Montenegro,Montserrat,Morocco,Mozambique,Myanmar,Namibia,Nauru,Nepal,Netherlands,Netherlands Antilles,New Caledonia,New Zealand,Nicaragua,Niger,Nigeria,Niue,North Korea,Northern Mariana Islands,Norway,Oman,Pakistan,Palau,Palestine,Panama,Papua New Guinea,Paraguay,Peru,Philippines,Pitcairn,Poland,Portugal,Puerto Rico,Qatar,Republic of the Congo,Reunion,Romania,Russia,Rwanda,Saint Barthelemy,Saint Helena,Saint Kitts and Nevis,Saint Lucia,Saint Martin,Saint Pierre and Miquelon,Saint Vincent and the Grenadines,Samoa,San Marino,Sao Tome and Principe,Saudi Arabia,Senegal,Serbia,Seychelles,Sierra Leone,Singapore,Sint Maarten,Slovakia,Slovenia,Solomon Islands,Somalia,South Africa,South Korea,South Sudan,Spain,Sri Lanka,Sudan,Suriname,Svalbard and Jan Mayen,Swaziland,Sweden,Switzerland,Syria,Taiwan,Tajikistan,Tanzania,Thailand,Togo,Tokelau,Tonga,Trinidad and Tobago,Tunisia,Turkey,Turkmenistan,Turks and Caicos Islands,Tuvalu,U.S. Virgin Islands,Uganda,Ukraine,United Arab Emirates,United Kingdom,United States,Uruguay,Uzbekistan,Vanuatu,Vatican,Venezuela,Vietnam,Wallis and Futuna,Western Sahara,Yemen,Zambia,Zimbabwe'.split(',')
      countries.forEach((countryName) => {
        assert.notEqual(null, checkCodes.convert(countryName))
      })
    })
  })

  mocha.describe('abbreviation for UK', () => {
    mocha.it('should convert from abbreviation of UK code', () => {
      assert.equal('GB', checkCodes.convert('UK'))
      assert.equal('GB', checkCodes.convert('U.K.'))
      assert.equal('GB', checkCodes.convert('U.K'))
    })
  })

  mocha.describe('convert country name to ISO 3166', () => {
    mocha.it('should be convertible', () => {
      assert.equal('Vatican City State', checkCodes.iso('Vatican'))
      assert.equal('Russian Federation', checkCodes.iso('Russia'))
    })
  })
})
