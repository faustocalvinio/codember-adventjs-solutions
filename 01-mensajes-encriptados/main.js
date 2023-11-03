const text = document.querySelector('#main-text').textContent;
let stringFinal = "";
const textArray = text.split(' ');
const resp = document.querySelector('#response');
const data = [];
const responseP=document.getElementById('response-p');

textArray.forEach(word => {
    if (data.find(item => item.word.toLowerCase() === word.toLowerCase())) {
        data.find(item => item.word.toLowerCase() === word.toLowerCase()).count++
    } else{
        data.push({
            word: word,
            count: 1
        })
    };
});

setTimeout(() => {   
    data.forEach(item => {
        stringFinal = stringFinal + item.word + item.count
    });
}, 1000);

setTimeout(() => {
    console.log(stringFinal);  
}, 2000);