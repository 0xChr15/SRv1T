const date = new Date();
const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = new Intl.DateTimeFormat(navigator.language, dateOptions).format(date);

const number = 12345.6789;
const numberOptions = { style: 'currency', currency: 'USD' };
const formattedNumber = new Intl.NumberFormat(navigator.language, numberOptions).format(number);