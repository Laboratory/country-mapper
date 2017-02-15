var fs = require("fs");
var path = require('path');
var country = require('country-data');
var _ = require('lodash');
var lookup = country.lookup;
var allCountries = country.countries.all;
var dicts = [];

var normalizedPath = path.join(__dirname, './', 'dicts');
fs.readdirSync(normalizedPath).forEach(function (file) {
    if (/\.dict\./.test(file)) {
        var content = require(path.join(normalizedPath, file));
        dicts.push(content);
    }
});

var convert = function (countryName) {
    var country = getCountry(countryName);
    return (country || {}).alpha2 || null;
};

var getCountry = function (countryName) {
    var countries = lookup.countries({
        name: countryName
    });
    //try to find country without case insensitive
    if (countries.length === 0 && countryName) {
        _country = _.find(allCountries, function (item) {
            if (item && item.name && item.name.toLowerCase() == countryName.toLowerCase()) {
                return item.name;
            }
        });
        if (_country) {
            return (_country);
        }
    }
    //try to find country inside dicts
    if (countries.length === 0 && countryName) {
        for (var i = 0; i < dicts.length; i++) {
            var dict = dicts[i];
            countries = lookup.countries({
                name: dict[countryName]
            });
            if (countries.length > 0) break;
        }
    }
    return countries[0] || null;
};

var iso = function (countryName) {
    var country = getCountry(countryName) || {};
    return (country.name || null);
};

module.exports = {
    convert: convert,
    iso: iso
};
