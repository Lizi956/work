function reduce(arr, callbackFn, initialValue) {
  let acc = initialValue;
  for (let i = startIndex; i < arr.length; i++) {
    acc = callbackFn(acc, arr[i]);
  }

  return acc;
}

//other homework

document.querySelector(".card-title").textContent = cardData.title;

//test js

// 1.
function displayDayAndTime() {
  const today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[today.getDay()];

  let hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
}
// 2.
function printWindowContents() {
  window.print(printWindowContents);
}

// 3. ?
getCurrentDate();

// 4. ?

// 5. ?

// 6. ?
function leapyear(year) {
  return;
}

// 7. Find if January 1st will be a Sunday between 2014 and 2050
function findJanuaryFirstSundays() {
  console.log("January 1st is a Sunday in the following years:");
  for (let year = 2014; year <= 2050; year++) {
    const januaryFirst = new Date(year, 0, 1);
    if (januaryFirst.getDay() === 0) {
      console.log(year);
    } //ეს ვერ  გავაკეთე  მაინტერესებდა და ვკითხე AI ს მთლიანად ,სწორადაა??
  }
}

// 8.?

// 9.
function daysUntilChristmas() {
  const today = new Date();
  const currentYear = today.getFullYear();

  const christmas = new Date(currentYear, 11, 25);
}
daysUntilChristmas();

// 10. ?

// 11. ?

// 12.
console.log(`Website URL: ${window.location.href}`);

// 13.
function createVariable(varName, value) {
  window[varName] = value;
  return window[varName];
}

// 14. ?

// 15.
function difference(num) {
  return num > 13;
}

// 16. ?

// 17. ?

console.log(difference19(25));

// 18.
function checkFifty(a, b) {
  return a === 50 || b === 50 || a + b === 50;
}

// 19. ?

// 20.?

// 21.
function addPy(str) {
  if (str.startsWith("Py")) {
    return str;
  }
  return "Py" + str;
}

// 22.
function removeCharacter(str, position) {
  return str.slice(0, position) + str.slice(position + 1);
}

// 23.
function swapFirstLastChar(str) {
  if (str.length < 2) {
    return str;
  }
}

// 24.
function addFirstCharFrontBack(str) {
  if (str.length === 0) {
    return str;
  }
}

// 25. ?

// 26.
function modifyString(str) {
  if (str.length < 3) {
    return str;
  }
}

// 27. ?

// 28. ?

// 29.?

// 30. ?
// 31. Find the largest of three given integers
function findLargestNumber(a, b, c) {
  return Math.max(a, b, c);
}

// 32. ?

// 33.

// 34.

// 35.

// 36.

// 37. ?

// 38.
function computeSum(a, b) {
  const sum = a + b;
}
// 39.?

// 40.?

// 41. ?

// 42. ?

// 43.
function checkSameRightmostDigit(a, b, c) {}

// 44. ?

// 45.
function checkFifteen(a, b) {
  return a === 15 || b === 15 || a + b === 15 || Math.abs(a - b) === 15;
}

// 46.?

// 47. ?

// 48. ?

// 49.?

// 50.?

// 51. ?

// 52. ?

// 53.
for (let i = 0; i < str.length; i++) {
  if (str[i] === "a" && i + 4 < str.length && str[i + 4] === "b") {
    return true;
  }
  if (str[i] === "b" && i + 4 < str.length && str[i + 4] === "a") {
    return true;
  }
}

return false;

// 54. ?

// 55. ?

// 56. ?

// 57. ?

// 58. ?

// 59.?

// 60.

if (str.length <= 2) {
  return "String is too short";
}

return str.slice(1, -1);

// 61. ?

// 62. ?

// 63. ?

// 64. ?

// 65.
function endsWithScript(str) {
  if (str.length < 6) {
    return false;
  }
  return str.endsWith("Script");
}

// 66.
function displayCity(cityName) {
  if (cityName.startsWith("Los") || cityName.startsWith("New")) {
    return cityName;
  }
  return "";
}

// 67. ?

// 68.

// 69. ?

// 70. ?

// 71.
function checkOne(arr) {
  return arr.length >= 1 && (arr[0] === 1 || arr[arr.length - 1] === 1);
}

// 72.
function checkFirstLastSame(arr) {
  return arr.length === 3 && arr[0] === arr[2];
}

// 73.
function reverseArray(arr) {
  return arr.length === 3 ? arr.reverse() : arr;
}

// 74.?

// 75.

function middleElements(arr1, arr2) {
  return arr1.length === 3 && arr2.length === 3 ? [arr1[1], arr2[1]] : [];
}

// 76.
function firstLastArray(arr) {
  return arr.length >= 1 ? [arr[0], arr[arr.length - 1]] : [];
}

// 77.?

// 78. ?

// 79.?

// 80.?

// 81.?

// 82.?

// 83. ?

// 84. ?

// 85. ?

// 86. ?

// 87.
function areSimilarArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
}

// 88. ?

// 89. ?

// 90. ?

// 91. ?
// 92. ?

// 93.
function maxAdjacentDifference(arr) {
  if (arr.length < 2) return 0;
}

// 94.
function maxPairDifference(arr) {
  if (arr.length < 2) return 0;

  let min = arr[0];
  let max = arr[0];
}

// 95. ?

// 96. ?

// 97. ?

// 98.
function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

// 99. ?

// 100. ?

// 101. ?

// 102. ?

// 103. ?

// 104.?

// 105. ?

// 106.
function divideUntilInteger(n, d) {
  while (n % d === 0) {
    n /= d;
  }
  return n;
}

// 107. ?

// 108.
function dotProduct(v1, v2) {
  return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

// 109.

// 110.
function countEvenBefore(arr, target) {
  let count = 0;
  for (let num of arr) {
    if (num === target) break;
    if (num % 2 === 0) count++;
  }
}

// 111.
function findUniqueNumber(a, b, c) {
  if (a === b) {
    return c;
  } else if (a === c) {
    return b;
  } else {
    return a;
  }
}

// 112.

let count = 0;

// 113. ?

// 114. ?

// 115. ?

// 116.?

// 117. ?

// 118. ?

// 119. ?

// 120. ?

// 121. ?

// 122.

let increasing = true;
let decreasing = true;

// 123.

// 124.
function logicalNor(x, y) {
  return !(x || y);
}

// 125. ?

// 126. ?

// 127. ?

// 128. ?

// 129. ?

// 130. ?

// 131. ?

// 132.
function findPrimeFactors(n) {
  const factors = new Set();
}

// 133. ?

// 134. ?

// 135. ?

// 136. ?

// 137.
function testGreaterThan15(num) {
  return num > 15 ? num : 15;
}

// 138. ?

// 139. ?

// 140. ?

// 141. ?

// 142. ?

// 143. ?

// 144. ?

// 145. ?

// 146.
function sumOfCubes(n) {
  return Math.pow((n * (n + 1)) / 2, 2);
}

// 147.
function sumOfDigits(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= "0" && char <= "9") {
      sum += parseInt(char);
    }
  }

  return sum;
}

// 148. ?

// 149.

// 150. ?