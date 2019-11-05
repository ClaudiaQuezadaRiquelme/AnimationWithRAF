let globalID;

// const time = {
//   start: performance.now(),
//   total: 6000
// };

const finalPosition = 75;

const moveFromTopToDown = (location, time, elementID) => {
  //console.log('moveFromTopToDown');
  
  let pos = location; // 0
  let setTime = time;
  let elemID = elementID;
  
  if (pos == finalPosition ) {
    stopMove();
  } else {
    setTimeout(() => {
      pos++;
      console.log('pos: ', pos);
      document.getElementById(elemID).style.top = pos + 'vh';
      //document.getElementById('cherryBlossom2').style.top = pos + 'vh';
      //document.getElementById('cherryBlossom3').style.top = pos + 'vh';
      globalID = requestAnimationFrame(moveFromTopToDown(pos, setTime, elemID));
    }, setTime)

    // pos++;
    // console.log('pos: ', pos);
    // document.getElementById('cherryBlossom').style.top = pos + 'vh';
    // globalID = requestAnimationFrame(moveFromTopToDown(pos));
  }
}

// const startMove = (position) => {
//   console.log('onclick works');
//   globalID = requestAnimationFrame(moveFromTopToDown(position));
// }

const stopMove = () => {
  console.log('stopMove()');
  cancelAnimationFrame(globalID);
}