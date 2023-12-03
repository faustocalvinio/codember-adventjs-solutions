function findFirstRepeated(gifts) {

    let checkedNumbers=[];
    let finalNumbers=[];

    gifts.forEach(giftId => {
      if(checkedNumbers.includes(giftId)){      
        finalNumbers.push(giftId);      
      } else{
        checkedNumbers.push(giftId);      
      }
    });

    if (finalNumbers.length===0) return -1 
    else return finalNumbers[0];    
};
