const message = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';
const solutionParagraph = document.getElementById('solution-p');

function compiler ( input ){
    let count = 0;
    let outputNumbers= [];
    let solutionString = '';

    const splittedInput=input.split('');

    splittedInput.forEach(operator => {
        switch ( operator ){
            case "&": outputNumbers.push(count);break
            case "#": count++;break
            case "@": count--;break
            case "*": count*=count;break
        }
    });
    solutionString = outputNumbers.join('');
    return solutionString;
};


setTimeout(() => {
    console.log(compiler(message));
    solutionParagraph.innerHTML = `Solution: ${compiler(message)}`;
}, 1000);