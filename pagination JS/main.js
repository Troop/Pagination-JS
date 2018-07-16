//javascript File
console.log("IN");
const searchButton = document.getElementById('searchButton');
const searchField = document.getElementById('searchField');
const studentName = searchField.value;
const studentUl = document.getElementById('paginationList');
const lis = studentUl.children;

//pagination links to jquery plugin

//$(studentUl).twbsPagination({
  //totalPages: 35,
  //visiblePages: 3,
  //itemOnPage: 10,
  //onPageClick: function (event, page) {
    //$(studentUl.children).text('Page ' + page);
  //}
//});
$(function() {
    $(lis).pagination({
        items: lis.length,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
        });
    });

//Button clicker
searchButton.addEventListener('click', (e) => {
  console.log(studentUl);
  //Goes through the studentList
  //for(let i=0; i< lis.length; i++)
  //{
    console.log("For loop");
    //if(lis.children == studentName)
  //  {
        //Compare students
    //}
    //Compare name to studentName

//  }
  //const name = searchList(studentName);
})
