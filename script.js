/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";
const create = "create";
const remove = "remove";
const form = document.getElementById("create");
const btnd = document.getElementById("remove");

contents = [];

// DOM Elements
let appContainer = document.getElementById(appID);
create.addEventListener("add", formHandler);
//
// Functions
//

// Add a heading to the app container
function formHandler(event) {
  event.preventDefault();
  const input = document.getElementById("create");
  const value = input.value;
  contents.push(value);
  console.log(contents);
  add(contents);
}


function add(contents) {
  const list = document.createElement("ul");
  const item = document.createElement("li");
  list.appendChild(item);

}
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();