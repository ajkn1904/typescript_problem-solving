/*
Description: Create a function that takes a string and an optional boolean.

If the boolean is true or not provided, return the string in uppercase.
If the boolean is false, return the string in lowercase.
*/

function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false){
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
    
    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(e => e.rating >= 4);  
    }
    
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book D", rating: 2.0 },
        { title: "Book E", rating: 9.2 },
        { title: "Book F", rating: 5.5 }
      ];
      
     const res = filterByRating(books); 
     //console.log(res);
      // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
    
    /*
    Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.
    */
    function concatenateArrays<T>(...arrays: T[][]): T[]{
        const arr : T[] = [];
        for(let i of arrays){
            arr.push(...i)
        }
        return arr;
    }
    
    const res1 = concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
    const res2 = concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
    
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