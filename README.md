# make-qrcode

A cli tool for making qrcode and save image as PNG, using an external web service.

[![Deps](https://david-dm.org/modood/make-qrcode.svg)](https://david-dm.org/modood/make-qrcode) 
[![npm](https://img.shields.io/npm/v/make-qrcode.svg)](https://www.npmjs.com/package/make-qrcode)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/modood/make-qrcode/make-qrcode/master/LICENSE)

## Installation

`$ npm install -g make-qrcode`

## Usage

```
Usage: qrcode [options]

Options:

  -h, --help     output usage information
  -V, --version  output the version number

Usage:

  $ qrcode <url>    specify the url.

Examples:

  $ qrcode https://github.com/modood/make-qrcode
```

## example

```
$ qrcode https://github.com/modood/make-qrcode
```

![qrcode.png](qrcode.png)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

this repo is released under the [MIT License](http://www.opensource.org/licenses/MIT).
