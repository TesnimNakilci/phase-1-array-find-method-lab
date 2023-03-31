// code your solution here

/*const testV = {}
function testFunc() {
  return "helloo"
}*/

function superbowlWin(objArr) {
  const winYear = objArr.find( e => e.result === "W")
  if(winYear) {
    return winYear.year
  } else {
    return undefined
  }
}