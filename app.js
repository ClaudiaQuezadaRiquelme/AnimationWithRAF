let globalID;
let globalIDsin;
let globalIDsinFade;

const finalPosition = 75; // vh
let xPos = 0;
let angle = 0;

const moveFromTopToDown = (location, time, elementID) => {
  
  let pos = location; // 0
  let setTime = time;
  let elemID = elementID;
  
  if (pos == finalPosition ) {
    stopMove(globalID);
  } else {
    setTimeout(() => {
      pos++;
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

const fadeAndDown = (location, time, elementID, duration) => {
  let pos = location; // 0
  let setTime = time;
  let elemID = elementID;
  start = new Date;

  if (pos == finalPosition || pos > finalPosition ) {
    stopMove(globalIDsin);
  } else {
    setTimeout(() => {

      if (pos >= 50) { //Fade
        let time = new Date - start;
        if(time < duration) {
          document.getElementById(elemID).style.opacity = 1 - time / duration;
          
        } else {
          document.getElementById(elemID).style.opacity = '0';
        }
      } else {
        document.getElementById(elemID).style.opacity = '1';
      }

      pos++;
      xPos = Math.round(50 * Math.sin(angle));
      angle += .1;
      
      document.getElementById(elemID).style.top = pos + 'vh';
      document.getElementById(elemID).style.transform = `translateX(${xPos}px)`;
    
      if (angle > 2 * Math.PI) {
        angle = 0;
      }

      

      globalIDsin = requestAnimationFrame(fadeAndDown(pos, setTime, elemID, duration));
    }, setTime)

  }

}

const stopMove = (ID) => {
  console.log('stopMove()');
  cancelAnimationFrame(ID);
}



const fade = (element, duration) => {
  let start = new Date;
  (next = () => {
      let time = new Date - start;
      if(time < duration) {
          element.style.opacity = 1 - time / duration;
          requestAnimationFrame(next());
      } else {
          element.style.opacity = '0';
      }
  })();
}