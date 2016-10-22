# country-mapper
[![Build Status](https://travis-ci.org/Laboratory/country-mapper.svg?branch=master)](https://travis-ci.org/Laboratory/country-mapper)

Country naming approach might be very unique from org to org. The reason for that is that decision makers do not pay much attention to existing industry standards while just stop on the nice looking names, which will lead to errors when different systems should talk to each other. We notice that country should have aligned with ISO 3166 name. To not have you to change your way, we offer you to introduce a country mapping as below:

	Sint Eustatius -> Bonaire, Saint Eustatius And Saba
	Bonaire -> Bonaire, Saint Eustatius And Saba

## Installation

Via [npm](https://www.npmjs.com/package/country-mapper):

    npm install country-mapper

### Usage
-----

```javascript
  var mapper = require('county-mapper');
  mapper.convert('Russian Federation'); // RU
  mapper.convert('Russia'); // RU
```

```javascript
  var mapper = require('county-mapper');
  mapper.iso('Russia'); // Russian Federation
```


## License

Formidable is licensed under the MIT license.
