const fs = require('fs')
const path = require('path')
const country = require('country-data')
const _ = require('lodash')
const lookup = country.lookup
const allCountries = country.countries.all
let dicts = []

const normalizedPath = path.join(__dirname, './', 'dicts')
fs.readdirSync(normalizedPath).forEach((file) => {
  if (/\.dict\./.test(file)) {
    let content = require(path.join(normalizedPath, file))
    dicts.push(content)
  }
})

const convert = (countryName) => {
  let country = getCountry(countryName)
  return (country || {}).alpha2 || null
}

const getCountry = (countryName) => {
  let countries = lookup.countries({
    name: countryName
  })
  // try to find country without case insensitive
  if (countries.length === 0 && countryName) {
    let _country = _.find(allCountries, (item) => {
      if (item && item.name && item.name.toLowerCase() === countryName.toLowerCase()) {
        return item.name
      }
    })
    if (_country) {
      return (_country)
    }
  }
  // try to find country inside dicts
  if (countries.length === 0 && countryName) {
    const cName = findCaseInsensitive(countryName)
    countries = lookup.countries({
      name: cName
    })
  }
  return countries[0] || null
}

const findCaseInsensitive = (countryName) => {
  for (let i = 0; i < dicts.length; i++) {
    let dict = dicts[i]
    const countries = Object.keys(dict)
    for (let j = 0; j < countries.length; ++j) {
      const name = countries[j]
      if (name === countryName || name.toLowerCase() === countryName.toLowerCase()) {
        return dict[name]
      }
    }
  }
}

const iso = (countryName) => {
  let country = getCountry(countryName) || {}
  return (country.name || null)
}

module.exports = {
  convert: convert,
  iso: iso
}
