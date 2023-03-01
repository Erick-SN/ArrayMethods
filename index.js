//Js Array Methods
const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//***** FILTER *****/
//The filter() method in JavaScript is used to create a new array
//from an existing array.It takes a callback function as an argument and
//returns a new array with only the elements that pass the test provided
//by the callback function.

const conditionFilter = (item) => item >= 18;
const canDrink = ages.filter((age) => conditionFilter(age));
console.log(canDrink);

const isRetail = (company) => company.category === 'Retail';
const retailsCompanies = companies.filter((company) => isRetail(company));
console.log(retailsCompanies);

const eightiesCompanies = (companies) =>
  companies.start >= 1980 && companies.start < 1990;
const companiesByDate = companies.filter((company) =>
  eightiesCompanies(company)
);
console.log(companiesByDate);

//***** MAP *****/
//The map() method in JavaScript creates a new array
//with the results of calling a provided function on
//every element in the calling array.

const companyNames = companies.map((company) => company.name);
console.log(companyNames);

const companiesTilte = companies.map(
  ({ name, start, end }) => `${name} [${start} - ${end}]`
);
console.log(companiesTilte);

const agesSquare = ages.map((age) => Math.sqrt(age));
console.log(agesSquare);

const agesTimesTwo = ages.map((age) => age * 2);
console.log(agesTimesTwo);

const ageMapCombination = ages
  .map((age) => Math.sqrt(age))
  .map((age) => age * 2);
console.log(ageMapCombination);

//***** REDUCE *****/
//The reduce() method in JavaScript is used to reduce the array to a single value.
//It executes a provided function for each value of the array(from left - to - right).
//The return value of the function is stored in an accumulator(result / total).

const operation = (item, acum) => acum + item;
const ageSum = ages.reduce((acum, age) => operation(acum, age), 0);
console.log(ageSum);

const totalyears = companies.reduce(
  (accum, company) => accum + (company.start - company.end),
  0
);
console.log(totalyears);

//***** SLICE *****/
//The slice() method in JavaScript is used to extract a section of a string and return
//it as a new string.It takes two parameters, start and end, and returns the part of the
//string between the start and end indices, not including the end index itself.
// if you provide a negative start you will get the items from the end
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const slicedNumbers = numbers.slice(1, 5);
console.log(slicedNumbers);
