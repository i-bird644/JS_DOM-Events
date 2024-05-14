console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById(node1) method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

const node2 = document.getElementsByClassName("node2");
for (let i = 0; i < node2.length; i++){
    //node2[i].textContent("I used the getElementById(node2) method to access this");
    node2[i].textContent = "I used the getElementByClassName(node2) method to access this";
}

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

const header3 = document.getElementsByTagName("h3");
for (let i = 0; i < header3.length; i++) {
  header3[i].textContent = "I used the getElementByTagName(h3) method to access all these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

const paEle = document.createElement("p");
paEle.textContent = "I am a <p> tag";

// TODO: Append the created node to the parent node using the element.appendChild() method

const divele = document.getElementById("parent");
divele.appendChild(paEle);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

const aEle = document.createElement("a");
aEle.textContent = "Visit me";

// BONUS: Add a link href to the <a>

aEle.href = "https://google.com";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

divele.insertBefore(aEle, paEle);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

const exe3Parent = document.getElementById("exercise-container3");
const exe3Para = document.getElementById("N1");
const newPara = document.createElement("p");
newPara.textContent = "New Child Node";
exe3Parent.replaceChild(newPara, exe3Para);

// TODO: Remove the "New Child Node"
exe3Parent.removeChild(newPara);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

// TODO: Create an unordered list element

const uList = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each

for (let i = 0; i < list.length; i++) {
    
  const olist = document.createElement("li");
  olist.id = "li" + i;
  olist.textContent = list[i];

  // TODO: Append the new list items to the unordered list element
  uList.appendChild(olist);
}

// TODO: Append the unordered list to the `div#container` under exercise 4 

const parDiv = document.getElementById("container");
parDiv.appendChild(uList);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality


const modalBut = document.getElementById("btn");
const mainDiv = document.createElement("div");
modalBut.addEventListener("click", () => {

    //SHOW MODAL FUNCTION - (show())
    
    const cardDiv = document.createElement("div");
    const para = document.createElement("p");

    

    mainDiv.id = "modal";
    cardDiv.className = "modal-card";
    para.textContent ="Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";

    cardDiv.appendChild(para);
    mainDiv.appendChild(cardDiv);

    document.body.append(mainDiv);

});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == mainDiv) {
    //mainDiv.style.display = "none";
    mainDiv.innerHTML = "";
      document.body.removeChild(mainDiv);
  }
};
