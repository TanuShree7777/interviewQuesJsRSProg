//  1. get the unique value from this array
// let a = ["1", "1", "2", "3", "3", "1"];
// let temp = []
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i])
//   if (!temp.includes(a[i])) {
//     temp.push(a[i])
//   }
// } */
//  console.log(temp,"wdwed") 

//2nd method
// let a = ["1", "1", "2", "3", "3", "1"];
// let b = []

// for (let i = 0; i < a.length; i++) {
//   if (b.indexOf(a[i]) === -1) {
//     b.push(a[i])
//   }
// }
// console.log(b)

//reverse

// console.log("reverse String")
// const str1 = "tanu"
// let rev = ""
// for (let i of str1) {
//     rev = i + rev
// }
// console.log(rev)

// function revStr(str) {
//     let rev = "";
//     for (let i of str) {
//         rev = i + rev
//     }
//     return rev

// }
// console.log(revStr("tanuu"))

// //remove duplicate

// const arr1 = ["hello", "i", "hi", "am", "i", "am", "tanu"]

// let temp = []
// for (let i of arr1) {
//     if (!temp.includes(i)) {
//         temp.push(i)
//     }
// }
// console.log(temp)

//frequency of an element in an array

// const arr2 = ["a", "a", "a", "a", "b", "b", "c", "c", "c"]
// let freq = {}
// for (let i of arr2) {
//     if (freq[i]) {
//         freq[i] += 1
//     }
//     else{
//         freq[i] = 1
//     }
// }
// console.log(freq)

//count vowels in a sentence

// const vowel = ["a", "e", "i", "o", "u"]
// const sent = "I am a gOOd girl"
// let vowelno = 0
// for (let i of sent.toLowerCase()) {
//     if (vowel.includes(i)) {
//         vowelno++
//     }
// }
// console.log(vowelno)

//max and min in an array

// const arr3 = [1, 2, 4, 8, 99, 2, 11, -1, 34]
// let max = arr3[0]
// let min = arr3[0]
// for (let i of arr3) {
//     if (i > max) {
//         max = i
//     }
//     if (i < min) {
//         min = i
//     }
// }
// console.log(max, min)


// const str2 = "i am a good girl"
// let a = str2.split(" ")
// console.log(a)
// resul = []
// let b
// for (let i of a) {
//     b = i.slice(0, 1).toUpperCase() + i.slice(1)
//     console.log(b)
//     resul.push(b)

// }
// console.log(resul.join(" "))


const sentence1 = "My name is tanu"

let res1 = sentence1.split(" ").reverse().join(" ")
console.log(res1);

console.log(res1.split("").reverse().join(""))

let arrNo = [1, 5, 7, 8, 5, 3, 5, 76, 7, 5]
console.log(
    arrNo.sort((a, b) => a - b)

);uu
