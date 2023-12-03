function findNaughtyStep(original, modified) {
    // Code here
    let differenciesStr = '';
    let splittedOriginal = original.split('');
    let splittedModified = modified.split('');

    if( original.length >= modified.length ){
        for (let index = 0; index < splittedOriginal.length; index++) {
            if (splittedOriginal[index] !== splittedModified[index]) {
                if ( differenciesStr === "") differenciesStr = splittedOriginal[index]
            }            
        }
    } else {
        for (let index = 0; index < splittedModified.length; index++) {
            if (splittedModified[index] !== splittedOriginal[index]) {
                if ( differenciesStr === "") differenciesStr = splittedModified[index]
            }            
        }
    }

    return differenciesStr
};

const original1 = 'abcd'
const modified1 = 'abcde'
console.log(findNaughtyStep(original1, modified1)) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original = 'abcde'
const modified = 'abcde'
console.log( findNaughtyStep('xxxx', 'xxoxx') ) // ''