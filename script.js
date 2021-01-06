//import { storyline } from './storyline.js';

const parent = document.getElementById('story');
const button = document.createElement('button');

function start() {
  let name = prompt("What will be your character's name?");
  document.getElementById('charName').innerHTML = `Your character's name is ${name}.`;
  /*TODO
  *Make an input asking if correct name, if not, repeat prompt
  */
  console.log(name);
  story(name);
}

const story = charName => {
  button.innerHTML = "Continue";
  parent.appendChild(button);
  button.addEventListener('click', () => {
    console.log(`Clicked, ${charName}`);
    document.getElementById('story').innerHTML = `Your name is ${charName} and you go to Akusawa High School.`;
  });
};

//const options = () => { }

const restart = () => {
  document.getElementById('content').innerHTML = " ";
  console.log('Cleared story');
};