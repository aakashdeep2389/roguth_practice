// var i;
// var temp = ''
// for(i = 1; i <= 9; i++){
// 	temp += i
// 	document.getElementById('rough').insertHtml = temp
// 	console.log(i, 'let')	
// }

// function akash(){
	
// 	function deep(){
// 		console.log(b)
// 	}
// 	deep()
// 	var b = 10
// }
// akash()

// function classRoom(name, rollnumber){
// 	this.name = name,
// 	this.rollnumber = rollnumber
// }

// let student = new classRoom('aakash', 1)
// console.log(student)

// let func = function func(){
// 	return func === func
// }
// let result = func()
// console.log(result)

// let arr = [1,2,43,4,2,1,2,3,3,1,1, 'some', {a:1,b:'a'}, {a:1,b:'a'},  'some']

// let uniq = [...new Set(arr)]
// // console.log(uniq)

// var i
// for(i = 0;i<=arr.length;i++){
// 	let a = arr[i]
// 	console.log(a)
// }

// const somearr = [23,24,25,23,35,25,24,35,46,35,46]

// for(let i = 0; i<=somearr.length; i++){
// 	let crrItem;
// 	const obj = {}
// 	crrItem = somearr[i]
// 	if(crrItem == somearr[i]){ 
// 		obj.somearr[i] = crrItem
// 	}
// 	console.log(obj)
// }
// function run(){
// 	alert('asdkahsd')
// }

// settimeout(run, 2000)


// let sun = 0

// function uiuiu(){
// 	console.log(sun)
// }
// uiuiu()

// async function avc() {
//  await setTimeout(myGreeting, 2000);

//  console.log('lkajhdhajksd')
// }

// avc()

// function myGreeting() {
//   console.log('567895')
// }

// const stng = ["GeeksforGeeeks", "I", "from", "am"]
// function sortingg(a,b){
//  return a.length - b.length
// }

// console.log(stng.sort(sortingg))

// console.log([...'John'])


// const text = 'kaJshHKJFjakj'

// function abc(text){
// 	let splitted = text.split("")
// 	var temp = ''
// 	splitted.filter((val)=>{
// 		if(val === val.toUpperCase()) {
// 			temp += val.toLowerCase()
// 		}else{
// 			temp += val.toUpperCase()
// 		}
// 	})
// 	console.log(temp)
// }

// abc(text)


// var tar = [12,43,65,23,8643];

// for(var i = 0; i < tar.length; i++){
//   console.log(tar[i])
// }


// console.log(a)

// let a = 10

// (function abc(){
// 	for(var i = 1;i<9; i++ ){
	
// 	}
// 	console.log(i)
// })()


// function abc(){
// 	function abcd(){
// 		function abce(){
// 			console.log('a')
// 			var x= 10
// 		}
// 	}
// 	console.log(x)
// }

// abc()abcd()abce()

// var obj = {name: 'tim', bio: 'lol'};

// var arr = [{name: 'beba', bio:'lulu'}, {name: 'keh', bio: 'kih'}];

// // var newArr = arr.concat([obj]);
// // or
// var newArr = arr.concat(obj);
// console.log('newArr')
// console.log(newArr)



// handlechange in react
//   const onInputChangeHandler = (e: any) => {
//     const updatedData = { ...addPathwayFormFields };
//     const { name, value } = e.target;
//     updatedData[name] = value;
    
//     setAddPathwayFormFields(updatedData);
//   };


// const a = {
// 	name: 'aakash',
// 	printName : function(){
// 	 return this.name
// 	}
// }



// document.write(a.printName())

// const hello = [
//   {
//     name: "Menu 1",
//     link: "http://google.com",
//     subitems: [
//       {
//         name: "Menu 2",
//         link: "http://google.com"
//       }
//     ]
//   },
//   {
//     name: "Menu 3",
//     link: "http://google.com",
//     subitems: [
//       {
//         name: "Menu 4",
//         link: "http://google.com",
//         subitems: [
//           {
//             name: "Menu 5",
//             link: "http://google.com"
//           },
//           {
//             name: "Menu 6",
//             link: "http://google.com"
//           }
//         ]
//       }
//     ]
//   }
// ];


// function getval(val){
// 	let temp = []
// 	if(val.length > 0){
// 		for(let i = 0; i < val.length; i++){
// 			if(val[i].subitems){
// 				for(let j = 0; j < val[i].subitems.length; j++){
// 					if(val[i].subitems[j].subitems){
// 						for(let k = 0; k < val[i].subitems[j].subitems.length; k++){
// 							temp.push(val[i].subitems[j].subitems[k].name)	
// 						}
// 					}
// 					temp.push(val[i].subitems[j].name)	
// 				}
// 			}
// 			temp.push(val[i].name)
// 		}

// 	}
// 	console.log(temp)
// }

// getval(hello)


// function getval(val){
// 	let temp = []
// 	if(val.length > 0){
// 		val.forEach((item)=>{
// 			if(item.subitems){
// 				item.subitems.forEach((innerItem)=> {
// 					if(innerItem.subitems){
// 						innerItem.subitems.forEach((innerItem2)=> {
// 							temp.push(innerItem2.name)
// 						})
// 					}
// 					temp.push(innerItem.name)
// 				})
// 			}
// 			temp.push(item.name)
// 		})
// 	}
// 	console.log(temp)
// }










// output should be 

// ["Menu 1","Menu 2","Menu 3","Menu 4","Menu 5"]



// console.log('active' !== ('penidng'&&'notoending'&&'active'))


// function parent(){
// let a = 10
// 	return function child () {
// 		console.log(a + 10)
// 	}
// }

// parent()()
// console.log(parent())


// var a = [2,1,4,6,2,1,8,9, 100, 21]

// console.log(a.sort())

// let text = document.getElementById("demo")


//5
// function roundstring(){
// 	let get = document.getElementById("demo")
// 	let text = get.childNodes[0].data 
// 	setInterval(function() {			
// 		text = text.slice(-1) + text.slice(0, text.length - 1)
// 		get.childNodes[0].data = text
// 	},100)
// }
// roundstring()


// // console.log(text)


// function animate_string(id) 
// {
//     var element = document.getElementById("demo");
//     var textNode = element.childNodes[0]; // assuming no other children
//     var text = textNode.data;

// setInterval(function () 
// {
//  text = text[text.length - 1] + text.substring(0, text.length - 1);
//   textNode.data = text;
// }, 100);
// }
// animate_string(demo)


//8
// (function matchNumber(){
// 	let val = Math.floor(Math.random() * 10);
// 	const aNumber = Number(window.prompt("Type a number", ""));


// 	console.log(aNumber, val)
// 	if(aNumber == val) alert('good work')
// 		else alert('try again')
	
// }())

// let a = 'iiinput'

// console.log(
// 	'iiinput'.split("").filter(e =>{
// 		return 'iiinput'.split("").filter(i=> i === e).length === 1
// 	})
// )
// console.log('iinput'.split('').filter(item=> 'iinput'.split('').filter(subitem=> subitem === item).length === 1));

// let dog = {
//   name: 'doggo',
//   sayName() {
//     console.log(this.name)
//   },
// }
// console.log(dog.sayName())
// let sayName = dog.sayName
// console.log(sayName())

//====================================================================

// document.querySelectorAll("button").addEventListener("onkeyup", btnkeyup)
// function btnkeyup(){
	
// }

//karan 
// console.log('iinput'.split('').filter(item=> 'iinput'.split('')
// 	.filter(subitem=> subitem === item).length===1));




// let str = 'buttooooon'

// function maxStringChar(str) {
// 	// let result = str.split("").filter(item => {
// 	// 	let inner = str.split("").filter(item2 => item === item2)
// 	// 	return console.log(inner, 'iner result')
// 	// })
// 	// return console.log(result)
// 	for(let i = 0; i >= str.length; i++){

// 		return console.log(str[i])
// 	}
// }

// maxStringChar(str)

// const getMaxChar = (string) => {
//     const map = {};
//     string.split("").forEach(char => {

//         map[char] = map[char] ? map[char] + 1 : 1;
///         console.log(map, map[char], char, 'map[char]')
//     });
//     max = 1;
//     char = string[0]
//     for(let k in map){
//         if(map[k] > max) {
//             max = map[k];
//             char = k
//         }
//     }
//     return char;
// }
// console.log(getMaxChar("buttttttttooon"));


// const cars = {
// 	a:1,b:2,c:3
// }

// let text = "";
// for (let x of cars) {
//   console.log(x, ": x")
// }

//2 How to find the maximum occurring character in given String? (solution)

function maxchar(str){
	let map = {}
	str.split("").forEach(c=> map[c] = map[c] ? map[c] + 1 : 1 )
	// Object.values(map)
	let max = 1
	let char = str[0]
	for(let i in map){
		if(map[i] > max){
			max = map[i]
			char = i
		}
		console.log({char:max})
		return {char:max}
	}

}

// maxchar('buttooooooooon')

//3 How do you remove a given character from String? (solution)


function removeChar(str, char){
	let removedChar = str.split("").filter(item => item != char)
	console.log(removedChar)
	return removedChar
}

// removeChar('buttooooooooon', 'o')


//4 How do you find the length of the longest substring without repeating characters?

function longChar(str){
	let lastChar
	let map = {}
	str.split("").forEach(i => {
		if(i != lastChar){
			map[i] = map[i] ? map[i] + 1 : 1
			map.z + 1
			lastChar = i
		}
	})
	let count = 1
	for(let k in map){
		if(map[k] >= count){
			count = map[k]
		}
	}
	return count
}

// longChar('abcabcbbaab')

//5 How do you check if a given string is a palindrome

const mapOfString = str => {
 const map ={};
 str.split("").forEach(i => map[i] = map[i] ? map[i] + 1: 1);
 return map;
} 
const checkPalindrome = (string1, string2) => {
   const mapObject1 = mapOfString(string1);
   const mapObject2 = mapOfString(string2)
   if(mapObject1.length !== mapObject2.length){
       return false;
   }
   for(let i in mapObject1){
       if(mapObject1[i] !== mapObject2[i]){
           return false;
       }
   }
   return true;
}
// console.log(checkPalindrome("ffsss","sfsf"));


//6 How do you print duplicate characters from a string? (solution)
   const duplicateString = str => {
	    const arr =[];
	    const obj = mapOfString(str)
	    for(let j in obj){
	        if(obj[j] > 1){
	            arr.push(j)
	        }
	    }
	    return arr.join("")
   }
   // console.log(duplicateString("wefdwd"));

//7 How do you find all the permutations of a string? (solution)
let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  		// console.log(remainingChars,'remainingChars')
  		console.log(findPermutations(remainingChars))
      for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
  }

// console.log(findPermutations('helloworld'))


let str = 'iiiinput'

let set = new Set(str)

// console.log(set.join())


let arrayOfLetters = {
	a:'a',
	b:'b'
};
let anotherArrayOfLetters = arrayOfLetters;
anotherArrayOfLetters = {};
// console.log(arrayOfLetters);


let obj = [
	{
		id: 'akjsd',
		name: 'iknkn'
},
{
		name: 'akjsd',
		id: 'iknkn'
}
]



function b(){
	setTimeout(()=>{
		let op = ""
		obj.forEach((data) => {
			op += `<li>${data.name}</li>`
		})
		document.body.innerHTML = op
	},2000)
}

function a(){
	return new Promise((res,rej)=>{
		setTimeout(()=>{
		obj.push({
			name: '87987'
		})
		let err = false
		if(!err){
			res()
		}else{
			rej("wrong")
		}
	},1000)
})
	
}

// a().then(()=>b()).catch((err)=>console.log(err))



let customarr = [3,6,8,3,32,9]

for(let i = 0; i <= customarr.length; i++){

}

// let r = customarr.map((i)=> i*2)
// let r2 = customarr.filter((i)=> i*2)

// console.log(r,'r')
// console.log(r2, 'r2')

const differences = customarr.map((value, index, array) => {
  if (index === 0) {
    // If it's the first element, there's no previous element to subtract from
    return 0;
  } else {
    // Calculate the difference between the current element and the previous one
    
    return value - array[index - 1];
  }
});

// console.log(differences);



class Parent {
	constructor(name){
		this.name = name
		alert('nameTaken', name)
	}
	hasParent(){
		alert('has Parent yes ' + name)
	}
}
class Child extends Parent {
	hasChild(){
		alert('has Child yes')
	}
}
// let parentobj = new Parent('neetu')
// let childobj = new Child('neetu')

// parentobj.hasParent()
// childobj.hasChild()


let api = 'https://jsonplaceholder.typicode.com/users'

async function callingApi(){
	const responce = await	fetch(api)
	const data = await responce.json()
	console.log(data);
}

async function logMovies() {
  const response = await fetch(api);
  const movies = await response.json();
  console.log(movies);
}

// callingApi()


function* simpleGenerator() {
  yield 1;    //yield for pause the function state
  yield 2;
  yield 3;
}

console.log(simpleGenerator().next())