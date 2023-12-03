function manufacture (gifts, materials) {

    const regalosPosibles = gifts.filter((gift) => {

      for (const letter of gift) {    

        if(!materials.includes(letter)) return 

      }  
      
      return gift
    });

    return regalosPosibles

};