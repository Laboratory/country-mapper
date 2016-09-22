var fs = require("fs");
var path = require('path');
var country = require('country-data');
var lookup = country.lookup;
var dicts = [];

var normalizedPath = path.join(__dirname, './', 'dicts');
fs.readdirSync(normalizedPath).forEach(function (file) {
    if (/\.dict\./.test(file)) {
        var content = require(path.join(normalizedPath, file));
        dicts.push(content);
    }
});

var convert = function (countryName) {
    var res = lookup.countries({
        name: countryName
    });
    if (res.length === 0) {
        for (var i = 0; i < dicts.length; i++) {
            var dict = dicts[i];
            res = lookup.countries({
                name: dict[countryName]
            });
            if (res.length > 0) break;
        }
    }
    return (res[0] || {}).alpha2;
};

module.exports = {
    convert: convert
};
