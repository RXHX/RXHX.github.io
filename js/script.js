// Find the number of Student and store it in numberOfStudent variable
var numberOfStudents = document.getElementsByTagName("li").length;
// Find the number of Pages and store it in numberOfPages variable
var numberOfPages = Math.ceil(parseInt(numberOfStudents / 10));
// The odd number of students
var oddPages = numberOfStudents % 10;
// Find the list of Students and store it in studentList Variable
var studentList = document.querySelectorAll("li");
// Function To create a button
function buttonCreation() {
  // variable declared to dislay the button
  var resultHTML = `<div id="pagination">`;
  // loop to store button values in Html tag
  for (var i = 0; i < numberOfPages; i++) {
    // add buttons
    resultHTML += `<button id = ${i + 1} onclick="handlePagination" >${
      i + 1
    }</button>`;
  }
  // check whether there are odd number of students or not
  if (oddPages != 0) {
    // add the extra button for odd Number of Student List
    resultHTML += `<button id = ${
      numberOfPages + 1
    } onclick="handlePagination" >${numberOfPages + 1}</button>`;
  }
  // closing the html tag
  resultHTML += `</div>`;
  // align the text style to be in the center
  document.getElementById("pagination").style.textAlign = "center";
  // add padding between the buttons
  document.getElementById("pagination").style.padding = "8px 16px";
  // store the html to the main html body
  document.getElementById("pagination").innerHTML = resultHTML;
}

// call button creation method
buttonCreation();

// Handles the Pagination in the program
function handlePagination(event) {
  // it holds all student list in the array
  var temp = [];
  // it holds all students record with the multiple of 10
  var resultData = [];
  // holds the starting point where we have to slice the array
  var start = "";
  // holds the ending point where we have to slice the array
  var end = "";
  // holds the resultant html to be displayed to the end user
  var resultHTML = `<ul class="contact-list">`;
  // loop to put student data in the temp array
  for (var i = 0; i < studentList.length; i++) {
    // put tag by tag element into the temp array
    temp.push(studentList[i].innerHTML);
  }
  // starting index for slicing the array
  start = (event.target.innerText - 1) * 10; // 10
  // ending index for slicing the array
  end = start + 10; // 20
  // store the value of sliced array to the resultData array
  resultData = temp.slice(start, end);
  // loop to extract information from the array
  // then put it in the resultHTML variable
  for (var j = 0; j < resultData.length; j++) {
    // add value to the variable
    resultHTML += ` <li class="contact-item cf">`;
    // add element to the resultHTML variable
    resultHTML += resultData[j];
    // close the <li> tag with </li>
    resultHTML += `</li>`;
  }
  // close the <ul> with </ul> tag
  resultHTML += `</ul>`;
  // now put this html in place of ul tag
  document.querySelector("ul").innerHTML = resultHTML;
  // assign the variable resultHTML to empty string
  resultHTML = ``;
}

// making an event listner and calling it on click of a button
document
  .getElementById("pagination")
  .addEventListener("click", handlePagination);
