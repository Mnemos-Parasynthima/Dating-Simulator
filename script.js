import { storyline } from './storyline.js'; // Imports storyline
//const storyline = new Storyline // Idk what I'm doing

const parent = document.getElementById('story'); 
const button = document.createElement('button'); // Create button

// Asks for char name
document.getElementById("start").addEventListener('click', () => {
  let name = prompt("What will be your character's name?");
  document.getElementById('charName').innerHTML = `Your character's name is ${name}.`;
  /*TODO
  *Make an input asking if correct name, if not, repeat prompt
  */
  console.log(name);
  story(name);
});

// Function that creates a button and appends to the body
const createButton = () => {
  button.innerHTML = "Continue";
  parent.appendChild(button);
  console.log('Button created /');
}

// Write story


// Creates story
const story = charName => {
  createButton(); //Initial button
  button.addEventListener('click', () => {
    console.log(`Character: ${charName} /`);
    document.getElementById('story').innerHTML = `
      Your name is ${charName} and you go to Akusawa High School. ${storyline.part1} <br>
    `; //Intro

    //button.removeEventListener('click');
    createButton(); //Creates button for next
    button.addEventListener('click', () => {
      document.getElementById('story').innerHTML = `${storyline.part2} <br>`;
      createButton();
      /*button.addEventListener('click', () => {
        document.getElementById('story').innerHTML = `${storyline.dia} <br>`;
      })*/
    })

  });
};

document.getElementById("restart").addEventListener('click', () => {
  document.getElementById('charName').innerHTML = " ";
  document.getElementById('story').innerHTML = " ";
  console.log('Cleared story');
  console.clear();
});