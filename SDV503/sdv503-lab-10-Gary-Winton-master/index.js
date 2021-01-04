const players = (P1, P2) => P1 === P2?'Tie': 
(P1 === 'rock' && P2 ==='scissors') || 
(P1 === 'paper' && P2 ==='rock') ||
(P1 === 'scissors' && P2 ==='paper') ?
'Player One Wins' : 'Player Two Wins'

console.log(players('paper', 'scissors'));


function myFunc(arr) {
    return Array.from(new Set(arr)).sort((x,y) => x - y)
}

console.log(myFunc([5,1,4,4,4,4,3,3,2,1,1,2]))