// eslint-disable-next-line @typescript-eslint/no-var-requires
const isCI = require('is-ci');

process.env['--foo'] = 'bar';
process.env['SimpleConsoleFormatter.printEnvelopes'] = 'false';

if (isCI) {
  // make error messages displayed within the html report readable
  // https://github.com/chalk/chalk#chalksupportscolor
  // --no-color
  process.env['FORCE_COLOR'] = '0';
}
