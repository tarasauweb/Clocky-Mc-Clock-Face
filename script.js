
var whatTimeIsIt = function (angle) {
      let result = null
      const oneHourDeg = 90/3;
      const oneMinDeg = 60/30
      let hours = Math.floor( angle/oneHourDeg)
      let degRemainder = angle - hours * oneHourDeg
      let minuts = Math.floor(oneMinDeg*degRemainder)
      hours === 0 ? result = `${12}:`: hours<10? result = `0${hours}:`: result = `${hours}:` 
      minuts<10? result += `0${minuts}`: result += `${minuts}`
      return result
}

whatTimeIsIt(286.7587573920647)
