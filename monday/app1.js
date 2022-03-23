console.log ('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7 , 9 , 45 ]

 ["Str", "alex","moh"]

['the’, ‘fox', 'over', lazy, 'dog'  ]

*/


/*
2
What is the index of "Banana”, Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let myfav =  ["Mansaf", "dawaly", "kabseh", "pizza", "kubeh ", " football", " basketball ", " vollybal", "tennis ", "action", "horror", "imaginary" ];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstofarray(x)
{
   return x[0];
}

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastofArray(x)
{
   return x = x[ x.length - 1];
}

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
let array= [0,5,7,9];
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8);
array.push(10);

/*
7
Using the console try to figure out what the thing that’s (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
let array2= [5,7,9];
array2.shift();
array2.push(-7);
array2.push(3.5);
array2.pop(1,1);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
let array3= [5,7,9];
let array4= [5,7,9,10];
 function middleofarray (x)
 {

     let arrlength = x.length ;
     let mnum_forodd = (arrlength-1) / 2;
     let mnum_foreven1 = (arrlength-2) / 2;
     let mnum_foreven2 = (arrlength) / 2;
     
     if (arrlength%2 == 0 )
      {
         return   x = [x [ mnum_foreven1 ]  , x [mnum_foreven2]];
          
     }
     if (arrlength%2 == 1 )
     {
          return x =  x [mnum_forodd] ;
        }
    
     
 }

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

let animals = ['cat', 'ele', 'bird'] ;
 animals[1] = 'elephant' ;
 animals[3] = 'zybra' ;
 let num = [1,2,3,8,9];
 nums.splice(0,5);
 nums.push(5,-22,3.5,44,98,44);


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
let array5= [0,5,7,9];
function indexOfArray(x , y)
{
   return x = x[y-1];
};

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast (x)
{
    let arr_len = x.length;
     let output = [];
    for (let i = 0 ; i < arr_len -1 ; i++)
    {
        output.push(x[i]);

    }
    return output
}

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd (x , y)
{
     x.push(y);
     return x;
}

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray (x)
{
    let sum = 0 ; 
    
    for ( let i=0 ; i < x.length ; i++)
    {
        sum = sum + x [i] ;
        
    }
    return sum ;
}
function sumArray2 (x)
{
    let sum = 0 ; 
    let i = 0 ; 
    while( i < x.length )
    {
        sum = sum + x [i] ;
        i++;
    }
    return sum ;
}

/*

14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray (x)
{
    let lowest = x[0] ; 
    for (let i=0 ; i < x.length ; i++)
    {
        
        if (x[i] < lowest)
        {
            lowest = x[i];
        }
    }
    return lowest ; 
}

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray(x,y)
{
    for (let i=0 ; i<x.length ; i++)
    {
        if (y == x[i])
        {
            x.splice(i,1);
        }
    }
    return x ;
}
function removeFromArray2(x,y)
{
    let i =0;
    while(i < x.length)
    {
        if (y == x[i])
        {
            x.splice(i,1);
        }
        i++
    }
    return x ;
}
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*





21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
