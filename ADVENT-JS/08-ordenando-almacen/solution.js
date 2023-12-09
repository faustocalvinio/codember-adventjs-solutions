function organizeGifts(gifts) {
    const nums = gifts.match(/\d+/g);
    const chars = gifts.match(/[a-z]+/g);  
    let result = '';

    for (const i of [ ...Array.from({ length: nums.length }).keys() ]) {
      let a = nums[i] / 50
      let b = nums[i] % 50 / 10 
      let c = nums[i] % 10
  
      let d = ('['+chars[i]+']').repeat(a)
      let e = ('{'+chars[i]+'}').repeat(b)
      let f = ('(').repeat(c > 0)
      f += chars[i].repeat(c)
      f += (')').repeat(c > 0)
  
      result += d + e + f
    }  
    
    return result
}
