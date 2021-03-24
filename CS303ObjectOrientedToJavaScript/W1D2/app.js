  
"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = {findTitles,findAuthors,findIds }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();
   

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions
    return titles;
}
////
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
 function showAuthors() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const authors = findAuthors();
   

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    authors.sort();
    const authorString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findAuthors() {
    let authors = [];
    authors = [ "Bill Gates", "Steve Jobs","Suzanne Collins"];  //FIX THIS!!
    // implement this and other functions
    return authors;
}
////
////
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
 function showIDs() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const ids = findIds();
   

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
   ids.sort();
    const idString = ids.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findIds() {
    let ids = [];
    ids = [ 1254, 4264,3245 ];  //FIX THIS!!
    // implement this and other functions
    return ids;
}
///
function addBook(libraryID,title,author){
    let newBook={};
    newBook.libraryID=1144;
    newBook.title="My New Book";
    newBook.author="Me Too";
    return newBook;
}