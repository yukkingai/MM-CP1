// this is the module pattern
// also called an IIFE
// and Immediately Invoked Function Expression
// crtl/comd + / is to change the code into text comment in shortcut
// highligh code and ctrl/comd + D is to make those two or more codes in typing at the same time

(() => {
    //this is a JAvaScript comment
    console.log("Hey! javascript is working!");

    // console.log is like print("some text") in Python //
    // go and find the elements on the page that you want the user to interact with
    // querySelector takes a CSS selector and users that to find a match in the HTML file



    // let theBadge = document.querySelector('#png'),
    //     theVector = document.querySelector('#vector');

    let DimSum = document.querySelectorAll("img");

    //querySelectorAll finds ALL elements that match the selector
    // and returns back an array-like object called a node list

    function logMyId() {
        debugger; //pauses code execution at this line

        // log the element's ID to the console window
        // 'this' refers to the element that you're interacting with at the moment
        console.log(this.id);
    }

    // figure out how you want the user to interact with the badge graphic - a click, mouserover, mouseout, double click etc.
    // theBadge.addEventListener('click', logMyId);
    // theVector.addEventListener('click', logMyId);

    // for each badge in our collection, add an event handler
    // arrow functions are just shorthand function declarations
    DimSum.forEach(dim_sum_1 => dim_sum_1.addEventListener("click", logMyId));
})();