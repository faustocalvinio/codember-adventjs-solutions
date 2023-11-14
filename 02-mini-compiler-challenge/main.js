// const message = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';
const message = '&##&*&@&'
const splitedMessages  =  message.split("");

let count = 0;

console.log(splitedMessages);

splitedMessages.forEach(letter => {
    switch (letter) {
        case '&':
            // count = parseInt(count.toString().concat(count)); break
            console.log(count); break
        case '#':
            {
                console.log(count,'adding one')
                count++
            } ; break
        case '@':
            {
                console.log(count,'removing one')
                count--
            } ; break
        case '*':
            count = count * 2; break
    }
})

setTimeout(() => {
    console.log(count);
}, 1000);