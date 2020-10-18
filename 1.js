let score1 = 0;
const set_Timer =7;
let timer = set_Timer;
let isPlay = false;
let intervalValue;
let a = 3;
let i;
const text = document.querySelector(".Hello-class");
const textInput = document.querySelector(".input-class");
const score = document.querySelector(".score-span");
const form = document.querySelector(".inputForm");
const button = document.querySelector(".buttonInput");
const time = document.querySelector(".timer-span");
const body1 = document.querySelector("body");
const topDiv = document.querySelector(".TopDiv");

let array = ['Hello','Jiseok','Commender Zico', "So Ryong", 'Nam soon', 'Kamst', 'Loy jo', 'Chul goo', 'Bo Kyueom'];
// let i =Math.floor(Math.random()*8);

function replay(){
  topDiv.classList.remove("topDivAppear");
  score.innerText = 0;
  score1 = 0;
  const ele1 = body1.querySelector(".createClass");
  const ele2 = body1.querySelector(".returnBtn");
  body1.removeChild(ele1);
  body1.removeChild(ele2);
  submitText();
}

function createMessege(){
  const messegeDiv = document.createElement("div");
  const messegeSpan = document.createElement("span");
  const return1 = document.createElement("button");
  return1.innerText = "다시 하기";
  return1.className = "returnBtn";
  messegeSpan.innerText = "모두 맞추셨습니다. ^^";
  messegeDiv.className = "createClass";
  messegeDiv.appendChild(messegeSpan);
  body1.appendChild(messegeDiv);
  body1.appendChild(return1);
  topDiv.classList.add("topDivAppear");
  return1.addEventListener('click', replay);
}

function inputClear(){
  clearInterval(intervalValue);
  btnText();
}

function repeatGame(){
  button.classList.remove("display");
  button.innerText = "게임 다시 시작";
  textInput.value = "";
  clickButton();
}

function checkTimer(){
  timer > 0 ? timer-- : isPlay = true;
  if(isPlay){
    clearInterval(intervalValue);
    repeatGame();
  }else{
    time.innerText = timer;
  }
}

function btnText(){
  const readonly = textInput.readOnly = false;
  textInput.classList.remove("showInput");
  timer = set_Timer;
  isPlay = false;
  button.classList.add("display");
  button.innerText = "게임 시작";
  intervalValue = setInterval(checkTimer, 1000);
}

function clickButton(){
  const readonly = textInput.readOnly = true;
  textInput.classList.add("showInput");
  button.addEventListener('click', btnText);
}

function compareText(event){
    event.preventDefault();
    if(textInput.value === text.innerText){
    score1++;
    score.innerText = score1;
    textInput.value ="";
    i = Math.floor(Math.random()*8);
    text.innerText = array[i];
    inputClear();
    }else{
      textInput.value ="";
    }
    if(score1 === 6){
      time.innerText = 0;
      timer = 0;
      checkTimer();
      createMessege();
    }
}

function submitText(){
  form.addEventListener('submit', compareText);
}


function init(){
  clickButton();
  submitText();
}

init();
