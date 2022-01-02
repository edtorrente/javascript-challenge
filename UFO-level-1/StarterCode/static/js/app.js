// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(data)


// Script that will listen to events and search throught date/time column to find rows that match input from user.

var enter = d3.select("#filter-btn");

enter.on("click", function() {

    d3.event.preventDefault(); //prevent page from refreshing itself.


    var inputUserComponent = d3.select(".form-control");

    var inputUserValue = inputUserComponent.property("value").toString();

    console.log(inputUserValue);

    //select HTML element for the table body

    var table = d3.select("tbody");

    table.html(" "); //clear out previous html table to to enter new data

// use .filter() function to filter the data to correspond to the date selected by user. The arrow function "=>" to minimize our script.

    var filteredEntry = tableData.filter(date => date.datetime === inputUserValue);

    filteredEntry.forEach((data) => {
    	// append a table row ("tr") for each iteration

        var row = table.append("tr");
        // Object.entries () function is used to break out key-value pairs for each entry
        Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td"); // used the .append() function to add a data to table data ("td")
            cell.text(value);
        });
    });


    console.log(filteredEntry);


});