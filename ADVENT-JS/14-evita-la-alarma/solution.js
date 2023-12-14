function maxGifts(houses) {
    const initialLength = houses.length;
  

    switch (initialLength) {
        case 0:
            return 0
        case 1:
            return houses[0];
        default:
            break;
    }
  
    const maxRegalos = new Array(initialLength);  

    maxRegalos[0] = houses[0];
    maxRegalos[1] = Math.max(houses[0], houses[1]);
  
    for (let i = 2; i < initialLength; i++) { 
      maxRegalos[i] = Math.max(houses[i] + maxRegalos[i - 2], maxRegalos[i - 1]);
    }  
   
    return maxRegalos[initialLength - 1];
}

console.log(maxGifts([2, 4, 2])) // 4 (4)
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100]) );