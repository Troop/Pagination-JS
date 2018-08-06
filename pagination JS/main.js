//javascript File
const studentUl = document.getElementById('paginationList');
const lis = studentUl.children;
//Search searchField dynamically
const header = document.getElementById("header");
var searchField = document.createElement("INPUT");
var searchButton = document.createElement("BUTTON");
searchField.setAttribute("type", "text");
searchField.setAttribute("class", "student-search");
searchButton.textContent = 'Search!';
searchButton.setAttribute("class", "student-search");
header.appendChild(searchButton);
header.appendChild(searchField);



//Pagination Bottom area
var paginationButtonsArea = document.getElementById('paginationButtonsArea');

//Hide list to be able to load the new list.
function paginationAndButtons()
{
  const studentPerPage = 10;
  const total = lis.length;
  const numberOfButtons = total%studentPerPage;
  //Add the list to the buttons
  for(var i=1;i<= numberOfButtons; i++)
  {
    console.log(i);
    //CREATE the RIGHT NUMBER OF BUTTONS
    //INCMPLETE
    var pagiButton = document.createElement("BUTTON");
    pagiButton.setAttribute("type", "button");
    pagiButton.setAttribute("class", ".paginationButtonsArea");
    paginationButtonsArea.appendChild(pagiButton);
    pagiButton.textContent = "Page " + [i];
  }
}

//hide all the elements
function hideList(){
  for(var i=0;i< lis.length; i++)
  {
    lis[i].style.display = "none";
  }
}
function showResultList()
{
  //Load the results from the search
  //Create a object list and appendChild
  //var resultList = document.createElement("");
}

function searching()
{
  //go through the list looking for names
  var studentName = searchField.value;
  const nameOnTheList = document.getElementsByTagName('h3');
  for(var i=0;i< lis.length; i++)
  {
    if(nameOnTheList[i].textContent == studentName)
    {
       console.log("Searching correct result");
       studentUl.appendChild(nameOnTheList[i]);
       showResultList();
    }
  }
}
//LOAD THE CODE WHEN THE PAGE LOADS
window.onload = function WindowLoad(event) {
    paginationAndButtons();
}

//Button clicker
searchButton.addEventListener('click', (e) => {
  if(searchField.value !== "")
  {
      hideList();
      //Get name and compare
      searching();
      //console.log(studentUl[3].value);
  }
  else{
    location.reload();
  }
})

//Pagination button clicker
paginationButtonsArea.addEventListener('click', (e)=>{
 console.log(e.textContent);
})
