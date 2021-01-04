
const ttt = [ //draws
    ["X", "O", "X"],
    ["X", "X", "O"],
    ["O", "X", "O"] 
  ];

  const ttt1 = [ //not started
    ["E", "E", "E"],
    ["E", "E", "E"],
    ["E", "E", "E"] 
  ];

  const ttt2 = [ // x wins diagonally
    ["X", "O", "X"],
    ["0", "X", "O"],
    ["O", "X", "X"] 
  ];

  const ttt3 = [ // o wins
    ["X", "O", "O"],
    ["X", "X", "O"],
    ["O", "X", "O"] 
  ];


  const ifEmpty = function() {
    if ((ttt[0][0]=== "E" && ttt[0][1]=== "E" && ttt[0][2]=== "E"  )&&
       (ttt[1][0]=== "E" && ttt[1][1]=== "E" && ttt[1][2]=== "E"  )&&
       (ttt[2][0]=== "E" && ttt[2][1]=== "E" && ttt[2][2]=== "E"  )){
      return "start a game"
    }
  }

console.log(ifEmpty());

const progress = function() {
  if ((ttt[0][0]=== "E" || ttt[0][1]=== "E" || ttt[0][2]=== "E"  ) ||
     (ttt[1][0]=== "E" || ttt[1][1]=== "E" || ttt[1][2]=== "E"  )||
     (ttt[2][0]=== "E" || ttt[2][1]=== "E" || ttt[2][2]=== "E"  )){
    return "game as started"
  }
}

console.log(progress());

const  winx= function() {
  if ((ttt[0][0]=== "X" && ttt[0][1]=== "X" && ttt[0][2]=== "X"  ) ||
      (ttt[1][0]=== "X" && ttt[1][1]=== "X" && ttt[1][2]=== "X"  ) ||
      (ttt[2][0]=== "X" && ttt[2][1]=== "X" && ttt[2][2]=== "X"  ) ||
      (ttt[0][0]=== "X" && ttt[1][0]=== "X" && ttt[2][0]=== "X"  ) ||
      (ttt[0][1]=== "X" && ttt[1][1]=== "X" && ttt[2][1]=== "X"  ) ||
      (ttt[0][2]=== "X" && ttt[1][2]=== "X" && ttt[2][2]=== "X"  ) ||
      (ttt[0][0]=== "X" && ttt[1][1]=== "X" && ttt[2][2]=== "X"  ) ||
      (ttt[0][2]=== "X" && ttt[1][1]=== "X" && ttt[2][0]=== "X"  )){
    return "game x wins"
  }
}

console.log(winx());

const  winO= function() {
  if ((ttt[0][0]=== "O" && ttt[0][1]=== "O" && ttt[0][2]=== "O"  ) ||
      (ttt[1][0]=== "O" && ttt[1][1]=== "O" && ttt[1][2]=== "O"  ) ||
      (ttt[2][0]=== "O" && ttt[2][1]=== "O" && ttt[2][2]=== "O"  ) ||
      (ttt[0][0]=== "O" && ttt[1][0]=== "O" && ttt[2][0]=== "O"  ) ||
      (ttt[0][1]=== "O" && ttt[1][1]=== "O" && ttt[2][1]=== "O"  ) ||
      (ttt[0][2]=== "O" && ttt[1][2]=== "O" && ttt[2][2]=== "O"  ) ||
      (ttt[0][0]=== "O" && ttt[1][1]=== "O" && ttt[2][2]=== "O"  ) ||
      (ttt[0][2]=== "O" && ttt[1][1]=== "O" && ttt[2][0]=== "O"  )){
    return "game O wins"
  }
}

console.log(winO());


const draw = function(){
if ((ifEmpty()===undefined)&&
   (progress()===undefined)&&
   (winx()===undefined)&&
   (winO()===undefined))
{
  return "draw"
}
}
console.log(draw());
