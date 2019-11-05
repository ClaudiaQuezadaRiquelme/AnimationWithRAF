let globalID;
let globalIDsin;

const finalPosition = 75; // vh
var xPos = 0;
var yPos = 0;
var angle = 0;

const moveFromTopToDown = (location, time, elementID) => {
  
  let pos = location; // 0
  let setTime = time;
  let elemID = elementID;
  
  if (pos == finalPosition ) {
    stopMove(globalID);
  } else {
    setTimeout(() => {
      pos++;
      // console.log('pos1: ', pos);
      document.getElementById(elemID).style.top = pos + 'vh';
      globalID = requestAnimationFrame(moveFromTopToDown(pos, setTime, elemID));
    }, setTime)

  }
}

const moveFromTopToDownSin = (location, time, elementID) => {
  
  let pos = location; // 0
  let setTime = time;
  let elemID = elementID;
  
  if (pos == finalPosition || pos > finalPosition ) {
    stopMove(globalIDsin);
  } else {
    setTimeout(() => {
      pos++;
      xPos = Math.round(50 * Math.sin(angle));
      angle += .1;
      
      document.getElementById(elemID).style.top = pos + 'vh';
      document.getElementById(elemID).style.transform = `translateX(${xPos}px)`;
    
      if (angle > 2 * Math.PI) {
        angle = 0;
      }

      globalIDsin = requestAnimationFrame(moveFromTopToDownSin(pos, setTime, elemID));
    }, setTime)

  }
}

const stopMove = (ID) => {
  console.log('stopMove()');
  cancelAnimationFrame(ID);
}