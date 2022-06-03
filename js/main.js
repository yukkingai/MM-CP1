// this is the module pattern
// also called an IIFE
// an Immediately Invoked Function Expression

(() => {
    // this is a JavaScript comment
    console.log('fired! javascript is working!');

    // Step 1: go and find the elemetns on the page that you want the user to interact with

    // querySelector takes a CSS selector and uses that to find a match in the HTML file

    // let theBadge = document.querySelector('#png'),
    //     theVector = document.querySelector('#vector');
    // querySelector finds the first element that matches

    // querySelectorAll finds ALL elements that match the selector
    // and returns back an array-like object called a node list
    let thedimsum = document.querySelectorAll('img');

    function logMyId() {
        debugger; //please code execution at this line

        //log the element's ID to the console window
        console.log(this.id);
        //'this' refers to the element that you're interacting with at the moment
    }

    // figure out how you want the user to interact with the badge graphic - a click, mouseover, mouseout, double click etc
    // theBadge.addEventListener('click', logMyId);
    // theVector.addEventListener('click', logMyId);

    // for each badge in our collection, add an event handler
    // arrow functions are just shorthand function declarations
    thedimsum.forEach(dimsum => dimsum.addEventListener('click', logMyId));

})();