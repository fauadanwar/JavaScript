// Import the Backpack class so we can make new Backpack objects.
import Backpack from "./Backpack.js";

// Create new Backpack object
const everydayPack = new Backpack(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

// Create new Backpack object
const frogPack = new Backpack(
  "pack02",
  "Frog Backpack",
  8,
  "green",
  3,
  10,
  10,
  false,
  "October 16, 2019 15:00:00 PST",
  "../assets/images/frog.svg"
);

// Add Backpack objects into an array
const backpackObjectArray = [everydayPack, frogPack];

// Export the array to be used in other files
export default backpackObjectArray;

//Create a function updatePage which will update below DOM and add click event listers to all buttons.
//On respective button click update the value in span with the value provided by user in input text fields.
//use querySelectorAll to select all buttons, texts and spans and then use forEach to add event listener to each button.
<div id="info">
    <p class="info-item" id="name">Name: <span class="value">-</span></p>
    <form id="update-name">
        <label for="name-input">Update Name:</label>
        <input type="text" id="name-input">
        <button type="submit" data-target="name">Update</button>
    </form>
    <p class="info-item" id="description">Description: <span class="value">-</span></p>
    <form id="update-description">
        <label for="description-input">Update Description:</label>
        <input type="text" id="description-input">
        <button type="submit" data-target="description">Update</button>
    </form>
    <p class="info-item" id="color">Color: <span class="value">-</span></p>
    <form id="update-color">
        <label for="color-input">Update Color:</label>
        <input type="text" id="color-input">
        <button type="submit" data-target="color">Update</button>
    </form> 
    <p class="info-item" id="volume">Volume: <span class="value">-</span></p>
    <form id="update-volume">
        <label for="volume-input">Update Volume:</label>
        <input type="text" id="volume-input">
        <button type="submit" data-target="volume">Update</button>
    </form>
  </div>

function updatePage(document) {
    const buttons = document.querySelectorAll('button');
    const texts = document.querySelectorAll('input');
    const spans = document.querySelectorAll('span');
    buttons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            spans[index].innerText = texts[index].value;
        });
    });
  }