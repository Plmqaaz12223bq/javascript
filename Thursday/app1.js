/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
let aboutMe = {
    firstName: "Ghufran",
    lastName: "Almomani",
    age: 24,
    dob: "28/1/1998",
    favoriteFood: ["fried Chicken","pizza" ,"mansaf"],
    favoriteMovie: ["Me Before You", "Home Alone", "Harry Potter","Up","It"]
  };






var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];
  
  /*
  2
  Using the varabile persons
  Create a function called firstName
  that accept an object
  and return all the first name of the person insides
  
  Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
  */
  function firstName(arr) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
      array.push(arr[i].name.first);
    }
    return array
  }

  
  
  /*
  3
  Using the varabile persons
  Create a function called averageAge
  that accept an object
  and return the average age of those persons
  
  Ex: averageAge(persons) => 41.2
  */
  function averageAge(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result = result + arr[i].age;
    }
    return result / arr.length;
  }
  
  /*
  4
  Using the varabile persons
  Create a function called olderPerson
  that accept an object
  and return the full name of the older person
  
  Ex: olderPerson(persons) => "Soso Al-Amora"
  */
  function olderPerson(arr) {
    let Age = arr[0].age;
    let indexOlder = 0;
    for (let i = 1; i < arr.length; i++) {
      if (Age < arr[i].age) {
        Age = arr[i].age;
        indexOlder = i;
      }
    }
    return arr[indexOlder].name.first + " " + arr[indexOlder].name.last;
  }
  
  /*
  5
  Using the varabile persons
  Create a function called longestName
  that accept an object
  and return the full name of the person have longest full name
  
  Ex: longestName(persons) => "Soso Al-Amora"
  */
  function longestName(arr) {
    let Name = arr[0].name.first.length + arr[0].name.last.length;
    let indexLongestName = 0;
    for (var i = 1; i < arr.length; i++) {
      if (Name < arr[i].name.first.length + arr[i].name.last.length) {
        Name = arr[i].name.first.length + arr[i].name.last.length;
        indexLongestName = i;
      }
    }
    return arr[indexLongestName].name.first + " " + arr[indexLongestName].name.last;
  }
  
  /*
  6
  Using the varabile persons
  Create a function called longestName
  that accept an object
  and return the full name of the person have longest full name
  
  Ex: longestName(persons) => "Soso Al-Amora"
  */
  
  //////////////////////////////////////////////////////////////////
  
  /*
  7
  Create a function called repeatWord
  that accept a string
  and return an object that represents how many times each word repeat
  ** no matter it is upper case or lower case
  ** Search on MDN about something can cut the string to words??
  
  Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
  => {
    my:1,
    name:2,
    is:1,
    alex:1,
    mercer:1,
    class:1,
    b:1,
    baba:1,
    mama:1,
    hello:3
  }
  */
  
  function repeatWord(str) {
    let arr = str.split(' ');
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i].toLowerCase()]) {
        obj[arr[i].toLowerCase()] += 1
      } else {
        obj[arr[i].toLowerCase()] = 1
      }
    }
    return obj;
  }
  
  /*
  8
  Create a function called repeatChar
  that accept a string
  and return an object that represents how many times each char repeat
  ** no matter it is upper case or lower case
  ** Search on MDN about something can cut the string to char??
  
  Ex: repeatChar("mamababatetacedo")
  => { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
  */
  function repeatChar(str) {
    let arr = str.split('');
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i].toLowerCase()]) {
        obj[arr[i].toLowerCase()] += 1
      } else {
        obj[arr[i].toLowerCase()] = 1
      }
    }
    return obj;
  }
  
  /*
  9
  Create a function called selectFromObject
  that accept an object and an array
  and return an object have the key that inside the array
  
  Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
  =>  {a: 1, cat: 3}
  */
  
  function selectFromObject(obj, arr) {
    let result = {}
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i].toLowerCase()]) {
        result[arr[i].toLowerCase()] = obj[arr[i].toLowerCase()]
      }
    }
    return result;
  }
  /*
  10
  Create a function called objectToArray
  that accept an object
  and return an array of the keys and values in this object
  
  Ex: objectToArray({firstName:"Moh",age:24})
  => ["firstName","Moh","age",24]
  */
  function objectToArray(obj) {
    let result = [];
    for (let key in obj) {
      result.push(key)
      result.push(obj[key])
    }
    return result;
  }
  
  /*
  11
  Create a function called arrayToObject
  that accept an array
  and return an object of the keys and values in this object
  
  Ex: arrayToObject(["firstName","Moh","age",24])
  => {firstName:"Moh",age:24}
  */
  
  function arrayToObject(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i += 2) {
      obj[arr[i]] = arr[i + 1];
    }
    return obj;
  }
  
  /*
  12
  Create a function called onlyNumber
  that accept an object
  and return a new object that have only the values that is a number
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {age:24}
  */
  function onlyNumber(obj) {
    let result = {}
    for (let key in obj) {
      if (typeof obj[key] === "number") {
        result[key] = obj[key];
      }
    }
    return result;
  }
  
  
  /*
  13
  Create a function called onlyString
  that accept an object
  and return a new object that have only the values that is a string
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {firstName:"Moh"}
  */
  function onlyString(obj) {
    let result = {}
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        result[key] = obj[key];
      }
    }
    return result;
  }
  
  /*
  14
  Create a function called onlyArray
  that accept an object
  and return a new object that have only the values that is a array
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {movies:[1,5,"string"]}
  */
  function onlyArray(obj) {
    let result = {}
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        result[key] = obj[key];
      }
    }
    return result;
  }
  
  /*
  15
  Create a function called keysArray
  that accept an object
  and return an array have the key inside this object
  
  Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => ['firstName', 'age', 'movies']
  
  */
  function keysArray(obj) {
    let result = [];
    for (let key in obj) {
      result.push(key);
    }
    return result;
  }
  