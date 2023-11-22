let passwordList = ``;

console.log('03 Cifrado Espia');

async function getPasswordsList (){
    const resp = await fetch('./encryption_policies.txt')
    const data = await resp.text()
    passwordList = data   
};

let clavesInvalidas=[];

async function main () {
    await getPasswordsList();    

    const splittedPasswords = passwordList.split('\n');

    splittedPasswords.forEach(password => {
        let letterRepeated = 0;

        const singlePwSplitted = password.split(" ");
        const targetLetter = singlePwSplitted[1].split(":")[0];
        const validRange = singlePwSplitted[0].split("-");
        const strToValidate = singlePwSplitted[2];

        validRange.forEach((range,index )=> {
            validRange[index]=parseInt(range)
        })
      
       
        
        for (let i = 0; i < strToValidate.length; i++) {            
            if (strToValidate[i] === targetLetter) {
            letterRepeated++;
            }
        };
    
       
        function isInValidRange() {
            if(letterRepeated >= validRange[0] && letterRepeated <= validRange[1]) return true              
            else {                
                clavesInvalidas.push(strToValidate.split(`\r`)[0])
            }            
        };

        isInValidRange();       

    });    
    console.log(clavesInvalidas[41]);
    document.getElementById('answer').innerText=clavesInvalidas[41];
};

main();

