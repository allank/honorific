## honorific

> Lists of honorific prefixes and suffixes.

[![npm](https://img.shields.io/npm/v/honorific.svg?style=flat)](https://www.npmjs.com/package/honorific)
[![Build Status](https://travis-ci.org/we-are-next/honorific.svg?branch=master)](https://travis-ci.org/we-are-next/honorific)
[![Dependency Status](https://david-dm.org/we-are-next/honorific/status.svg?style=flat)](https://david-dm.org/we-are-next/honorific#info=dependencies)

#### Install

```
npm i --save honorific
```

#### Usage

```js
var honorific = require('honorific');

console.log(honorific.prefixes);
console.log(honorific.suffixes);
```

```js
const honorific = require('honorific');

const PrefixDropdown = React.createClass({
  render: function() {
    var options = honorific.prefixes.forEach(function (prefix, i)  {
      return <option key={i}>{prefix}</option>
    });
    return <select>{options}</select>
  }
});

ReactDOM.render(<PrefixDropdown />, document.body);
```

#### License

[MIT](http://opensource.org/licenses/MIT) © [Wayne Ashley
Berry](http://www.wayneashleyberry.com)
