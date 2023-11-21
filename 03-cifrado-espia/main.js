let passwordList = ``

console.log('03 Cifrado Espia');

async function getPasswordsList (){
    const resp = await fetch('./encryption_policies.txt')
    const data = await resp.text()
    passwordList = data   
};




async function main () {
    await getPasswordsList()
    // console.log(passwordList);

    const splittedPasswords = passwordList.split('\n');
    splittedPasswords.forEach(password => {
        const singlePwSplitted=password.split(" ")
        const targetLetter=singlePwSplitted[1]
        const validRange=singlePwSplitted[0].split("-")
        validRange.forEach((range,index )=> {
            validRange[index]=parseInt(range)
        })
        console.log(validRange);
        // console.log(`range: ${singlePwSplitted[0]}`);
        console.log(`targetLetter ${targetLetter}`);
        console.log(`password string: ${singlePwSplitted[2]}`);

    })

}

main()

