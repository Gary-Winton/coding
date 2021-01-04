
const ttt = [ //draws
    ["X", "O", "X"],
    ["X", "X", "O"],
    ["O", "X", "O"] 
  ];
  console.log(ttt);

  const ttt1 = [ //not started
    ["E", "E", "E"],
    ["E", "E", "E"],
    ["E", "E", "E"] 
  ];
  console.log(ttt1);

  const ttt2 = [ // x wins diagonally
    ["X", "O", "X"],
    ["0", "X", "O"],
    ["O", "X", "X"] 
  ];
  console.log(ttt2);

  const ttt3 = [ // o wins
    ["X", "O", "O"],
    ["X", "X", "O"],
    ["O", "X", "O"] 
  ];
  console.log(ttt3);


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

var tttArr = [["E","E","E"],["E","X","X"],["E","E","E"]]
var result = ""

function countE(tttArr){
    var count = 0;
    for(var i = 0; i < tttArr.length; ++i){
        for (var j = 0; j < tttArr[i].length; ++j){
            if(tttArr[i][j] == "E")
            count++;
        }
    }
    if (count > 8){result = "Start playing"}else if (count > 0 && count < 9){result = "keep playing"}
    return result
}
console.log(countE(tttArr))

function checkComplete(tttArr){
    var count = 0;
    for(var i = 0; i < tttArr.length; ++i){
        count = count + tttArr[i].length
    }
    if (count < 9){result = "Incomplete"}else {result = "Complete"}
    return result
}
console.log(checkComplete([["E","E","E"],["E","X","X"],[]]))




class computer{
  constructor(){
      this.motherboardPrice = 520.99
      this.ramPrice = 250.40
      this.ssdPrice = 500.80
      this.hddPrice = 400.66
      this.casePrice = 375.50
      this.monitorPrice = 600.75
      this.keyboardPrice = 100.99
      this.mousePrice = 25.50
  }
  parts(){

  }
  getTotalCost(){
      console.log(this.motherboard + this.ram + this.ssd + this.hdd + this.case + this.monitor + this.keyboard + this.mouse)
      console.log(this.motherboard + this.ram + this.ssd + this.hdd + this.case)
  }
  getQuotePrice(){

  }
  printedQuote(){

  }
}
const client = new computer()
client.parts()
client.getTotalCost()
client.getQuotePrice()
client.printedQuote()