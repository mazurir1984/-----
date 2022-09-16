'use strict';

//Функция которая принимает строку и возвращает количество слов в ней.

function quantityWords(inputString) {
    const words = inputString.split(' ');

    for(let i = 0; i < words.length; i++) {
        return words.length;
    }
}

const inputStr = 'hello world hdhff djkjds djsdjjkjjjkj, hjhh!';
console.log(quantityWords(inputStr));


//Функция, которая получает строку и возвращает размер самого большого слова в ней

function theBiggestSizeWord(initialString){
    const brockenWords = initialString.split(' ').reduce(function(a, b) {
        if (b.length > a.length) {
            return b;
        } 
            return a;
    });
    return brockenWords.length;
}
const initialString = 'Hello world theBiggestWord';
console.log(theBiggestSizeWord(initialString))

