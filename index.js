
const WebPageTest = require('webpagetest');

const wpt = new WebPageTest('www.webpagetest.org', 'api-key');

const script = wpt.scriptToString([
  {logData: 0},
  {navigate: 'https://coolblue.nl/winkelmandje?add=735244'},
  {submitForm: 'id=shoppingcart_form'},
  {navigate: 'https://www.coolblue.nl/bestellen/inloggen'},
  {click: 'className=js-button-checkout-continue'},
  {navigate: 'https://www.coolblue.nl/bestellen/gegevens'},
  {setValue: ['name=firstName', 'Jane']},
  {setValue: ['name=lastName', 'Doe']},
  {setValue: ['name=postalCode',   '3012CN']},
  {setValue: ['name=streetNr', '664']},
  {setValue: ['name=email', 'lais.tomaz12@coolblue.nl']},
  {setValue: ['name=telephone', '0493 69 53 37']},
  {submitForm: 'id=checkout_form'},
  {logData: 1},
  {navigate: 'https://www.coolblue.nl/bestellen/betaalwijze'},
  {setValue: ['name=paymentMethodId', '2']},
  {submitForm: 'id=checkout_form'},
  {navigate: 'https://www.coolblue.nl/bestellen/overzicht'},
  'waitForComplete'
]);

console.log({ script });

wpt.runTest(script, {
  connectivity: 'Cable',
  location: 'ec2-eu-west-1:Chrome',
  firstViewOnly: false,
  runs: 1,
  pollResults: 10,
  video: true
}, function (err, result) {
  console.log( err || result);
});
