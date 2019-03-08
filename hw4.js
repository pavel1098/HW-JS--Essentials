
/**
 * 1.Function that does currency 
 * converter from USD to UAH (1 USD = 8 UAH).
 */

function convert(amount) {
	let uah = amount * 8;
	return uah + ' UAH';
}

console.log(convert(100)); //800 UAH



/**
 * 2.A function which returns reversed string.
 */
function reverse(str) {
	let newString = '';

	for (let i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}

	return newString;
}

console.log(reverse('abc')); // 'cba'



/**
 * 3.A function which prints the stair picture of size n
 */

function printStairs(n) {
	let str = '';
	for (let i = 0; i < n; i++ ) {
		for(let j = 0; j <= i; j++) {
			str += '#';
		}
		str += '\n';
	}

	return str;
}

console.log(printStairs(3));




/**
 * 4.A function which returns total sum of a range
 */

function totalSum(start, end) {
	let sum = 0;
	for(let i = start; i <= end; i++) {
		sum += i;
	}

	return sum;
}

console.log(totalSum(-1,3));



/**
 * 5.Write a function which returns the smallest of three numbers.
 */
function min(a, b, c) {
	if(a < b && a < c)
		return a + '-min';
	if(b < a && b < c)
		return b + '-min';
	if(c < a && c < b)
		return c + '-min';
}
console.log(min(10, 16, 11));



/**
 * 6.A function which prints the pyramid picture of size n
 */
function printPyramid(n) {
	
	for (let i = 0; i < n; i ++) {
		let str = '';
		for (let j = 0; j <= n-i; j++) {
			str += ' ';
		}
		for (let k = 0; k < 2*i+1; k++) {
			str += '#';
		}
		str += '\n';
		return str;	
	}
	
}

console.log(printPyramid(3));




/**
 * 7.A function which transforms 
 * first and last letter to uppercase 
 * (use built in string’s method).
 */
function firstAndLastToUpper(str) {
	let newStr = str.charAt(0).toUpperCase() + str.substring(1,str.length-1) + str.charAt(str.length-1).toUpperCase();

	return newStr; 
}


console.log(firstAndLastToUpper('abcd'));




/**
 * 8.A function which returns true if string 
 * contains 'ironman' or 'cursor' or 'ostap' 
 * otherwise returns false. 
 * The function must be case-insensitive.
 */
function cursorCheck(str) {

	let newStr = str.toLowerCase().split(' ');
	
	for (let i = 0; i <= newStr.length-1; i++) {
		if (newStr[i] == 'ironman' || newStr[i] == 'cursor' || newStr[i] === 'ostap') {
			return console.log(true);
		}
	}
	return false;

}

console.log(cursorCheck("Hello I am OstaP IRONMAN")); //true
console.log(cursorCheck('Superman is here')); //false





/**
 * 9.A function which returns a string with all letters 
 * in uppercase (without built in string’s method). 
 * The function supports only english alphabet.
 */

function toUppercase(str) {
  let newStr = "";
  for(i = 0; i < str.length; i++) {
    newStr += String.fromCharCode(str.charCodeAt(i) - 32);
  }
  return newStr;
}

console.log(toUppercase('adc'));


/**
 * 10.A function which removes duplication of letters in string. 
 * The function must be case-insensitive.
 */

function removeDuplicationLetters(str) {
	let newStr = '';

	for (let i = 0; i < str.length; i++) {
		if (newStr.indexOf(str[i].toLowerCase()) == -1 || str[i].toLowerCase() == ' ') {
			newStr += str[i].toLowerCase();
		}

		
	}
	return newStr;
}

console.log(removeDuplicationLetters('Hello I am iron Man')); //helo i am rn 




/**
 * 11.A function that when given a number n 
 * returns the n-th number in the Fibonacci Sequence. 
 * The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21…
 */

function fib(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
 return arr[n];
}

console.log(fib(4));
