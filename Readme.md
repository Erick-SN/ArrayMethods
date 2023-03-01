# Array Methods in JavaScript

This project is intended to explain the array methods in JavaScript, which includes map, filter and reduce.

## Map

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. It is used to iterate over an array and modify each element in it.

Syntax:

```javascript
array.map(function(currentValue, index, arr), thisValue)
```

## Filter

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. It is used to iterate over an array and return only elements that pass a certain condition.

Syntax:

```javascript
array.filter(function(currentValue, index, arr), thisValue)
```

## Reduce

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in single output value. It is used to iterate over an array and combine all elements into one value or object.

Syntax:

````javascript
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)  											    ```
````
