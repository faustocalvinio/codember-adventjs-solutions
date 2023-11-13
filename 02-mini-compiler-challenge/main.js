const message = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';
let count = 0;
console.log(message.split(""));
message.split('').forEach(letter => {
    switch (letter) {
        case '&':
            count = parseInt(count.toString().concat(count)); break
        case '#':
            count++ ; break
        case '@':
            count-- ; break
        case '*':
            count = count * 2; break
    }
})

setTimeout(() => {
    console.log(count);
}, 1000);