import { storyline } from './storyline.js';

const parent = document.getElementById('story');
const button = document.createElement('button');

document.getElementById("start").addEventListener('click', () => {
  let name = prompt("What will be your character's name?");
  document.getElementById('charName').innerHTML = `Your character's name is ${name}.`;
  /*TODO
  *Make an input asking if correct name, if not, repeat prompt
  */
  console.log(name);
  story(name);
});

// Function that creates a button and appends it
const createButton = () => {
  button.innerHTML = "Continue";
  console.log('Button inner html created');
  parent.appendChild(button);
  console.log('Child appended');
}

const story = charName => {
  button.innerHTML = "Continue";
  parent.appendChild(button);
  button.addEventListener('click', () => {

    console.log(`Character: ${charName}`);
    document.getElementById('story').innerHTML = `Your name is ${charName} and you go to Akusawa High School. ${storyline.part1}`;

    createButton();
    console.log("Button created");
    button.addEventListener('click', () => {
      document.getElementById('story').innerHTML = storyline.part2;
    })

  });
};

//const options = () => { }

const restart = () => {
  document.getElementById('charName').innerHTML = " ";
  document.getElementById('story').innerHTML = " ";
  console.log('Cleared story');
};