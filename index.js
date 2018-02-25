const categories = [
  require('./lib/compatibility'),
  require('./lib/database'),
  require('./lib/engineering'),
  require('./lib/logical'),
  require('./lib/math-trig'),
  require('./lib/text'),
  require('./lib/date-time'),
  require('./lib/financial'),
  require('./lib/information'),
  require('./lib/lookup-reference'),
  require('./lib/statistical'),
  require('./lib/miscellaneous')
];

const lib = {};

for (const c in categories) {
  const category = categories[c];
  for (const f in category) {
    lib[f] = exports[f] || category[f];
  }
}

export default lib;
