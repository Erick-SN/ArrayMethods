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
