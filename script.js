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
form.addEventListener("add", formHandler);
//
// Functions
//

// Add a heading to the app container
function formHandler(event) {
  event.preventDefault();
  
  contents.push(value);
  console.log(contents);
}


function add(contents) {
  const list = document.createElement("ul");
  const item = document.createElement("li");
  list.appendChild(contents[last]);

}
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

btnd.addEventListener("click", removeHandler);
function removeHandler() {
  contents.remove();
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