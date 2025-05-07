/*
Description: Create a function that takes a string and an optional boolean.

If the boolean is true or not provided, return the string in uppercase.
If the boolean is false, return the string in lowercase.
*/
function formatString(input, toUpper) {
    if (toUpper === false) {
        console.log(input.toLowerCase());
        return ("");
    }
    else {
        console.log(input.toUpperCase());
        return ("");
    }
}
/*
formatString("Hello");          // Output: "HELLO"
formatString("Hello", true);   // Output: "HELLO"
formatString("Hello", false);  // Output: "hello"
*/
/*
Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.
*/
function filterByRating(items) {
    return items.filter(function (e) { return e.rating >= 4; });
}
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 2.0 },
    { title: "Book E", rating: 9.2 },
    { title: "Book F", rating: 5.5 }
];
var res = filterByRating(books);
//console.log(res);
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
/*
Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.
*/
function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var arr = [];
    for (var _a = 0, arrays_1 = arrays; _a < arrays_1.length; _a++) {
        var i = arrays_1[_a];
        arr.push.apply(arr, i);
    }
    return arr;
}
var res1 = concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
var res2 = concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
// console.log(res1);
// console.log(res2);
/*

*/
/*
*/
/*
*/
/*
*/
/*
*/ 
