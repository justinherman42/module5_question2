


// Code was almost exclusively taken from a solution here  https://gist.github.com/jfreels/6814721#file-script-js.  Refacotring simply involved 
// changign column name
var tabulate = function (data,columns) {
  var table = d3.select('body').append('table')
	var thead = table.append('thead')
	var tbody = table.append('tbody')

	thead.append('tr')
	  .selectAll('th')
	    .data(columns)
	    .enter()
	  .append('th')
	    .text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	    .data(data)
	    .enter()
	  .append('tr')

	var cells = rows.selectAll('td')
	    .data(function(row) {
	    	return columns.map(function (column) {
	    		return { column: column, value: row[column] }
	      })
      })
      .enter()
    .append('td')
      .text(function (d) { return d.value })

  return table;
}

d3.csv('presidents.csv')
  .then(function(data) {
	var columns = ['Name','Height','Weight']
  tabulate(data,columns)
}).catch(function(error){
     // handle error   
  })


//<!--https://www.hashbangcode.com/article/search-table-javascript .  Once again heavily reused other code.  In this case it took a while due to errors 
//  I had been attempting to get the column values but it was not working.  In the end i found another place the data
// directly lived which was in the .innerhtml of the rows themselves.  However, this displays with td tags, which I removed by substringing the results 
function doSearch() {
  var q = document.getElementById("q");
  var v = q.value.toLowerCase();
  var rows = document.getElementsByTagName("tr");
  console.log("The element:", rows);
  var on = 0;
  for ( var i = 1; i < rows.length; i++ ) {
  	var fullname = rows[i].innerHTML;
  	fullname = fullname.toLowerCase();
  	fullname= fullname.substring(4,20)
 	 console.log("cells:", fullname);
    if ( fullname ) {
        if ( v.length == 0 || (v.length < 3 && fullname.indexOf(v) == 0) || (v.length >= 3 && fullname.indexOf(v) > -1 ) ) {
        rows[i].style.display = "";
        on++;
      } else {
        rows[i].style.display = "none";
      }
    }
  }
 
}
//-->
