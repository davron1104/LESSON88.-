'use strict';

// 1.filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });

// console.log(shortNames);


// 2.map

// let answers = ['IVan', 'ANna', 'Hello'];

// answers = answers.map(item => item.toLowerCase());
// console.log(answers);


// const randomDatas = ['Davron', 32, 'Sherzod', 18, 'Iroda'];
// const numberDatas = randomDatas.filter(item=> typeof item === 'number');
// console.log(numberDatas);

// 3.every/some 

// const some = [4, 'qrq', 'sdsdsdd'];
// console.log(some.some(item => typeof item === 'number'));
// console.log(some.every(item => typeof item === 'number'));

// 4.reduce

// const arr = [4, 5, 1, 3, 2, 6];
//                             // 0     4
//                             // 4     5
//                             // 9     1
//                             // 10    3
//                             // 13    2
//                             // 15    6
// const result = arr.reduce((sum, current) => sum + current, 3);
// console.log(result);

// const arr = ['apple', 'pear', 'plum'];
// const result = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result);




const obj = {
    ivan: 'persone', 
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr);






