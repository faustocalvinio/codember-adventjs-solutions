function calculateTime(deliveries) {
    let total = 7*3600
    for (const time of deliveries) {
      const parts = time.split(':')
      const totalDeliveryTime = parseInt(parts[0]) * 3600
        + parseInt(parts[1]) * 60
        + parseInt(parts[2])
      total -= totalDeliveryTime
    }
    const isTimeLeft = total > 0
    total = Math.abs(total)
    const hours = Math.floor(total / 3600)
    const minutes = Math.floor((total % 3600) / 60)
    const seconds = Math.floor(total - hours * 3600 - minutes * 60)
  
    return ('-').repeat(isTimeLeft)
      + ('0').repeat(hours<10)+hours+':'
      + ('0').repeat(minutes<10)+minutes+':'
      + ('0').repeat(seconds<10)+seconds
}