
//data
const Cities= [
    {Name: "Chicago", Miles: 329, Gallons: 10.6},
    {Name: "St. Louis", Miles: 284, Gallons: 10.5},
    {Name: "Indianapolis", Miles: 122, Gallons: 3.7},
    {Name: "Nashville", Miles: 191, Gallons: 6.4},
    {Name: "Cincinnati", Miles: 132, Gallons: 3.9}
]

//calculate the mileage for each city in Cities and add as a property to each city
Cities.forEach((city) => {
        city.Mileage = (city.Miles / city.Gallons).toFixed(1); //calculate the mileage for each city in Cities and add as a property
    })
//add event listenter to the "submit data" button to execute function and add new city data
const addCityData = document.getElementById("addCityData");
addCityData.addEventListener('click', addCity);

//function to take input and add a new city
function addCity(){
//assign variables to new input values
    let newCity = document.getElementById("newCity").value;
    let newMiles = document.getElementById('newMiles').value;
    let newGallons = document.getElementById('newGallons').value;
    let newMileage = (newMiles / newGallons).toFixed(1);
    ;
    
    //append new values to Cities array
    const appendCity = 
        {Name: newCity, 
        Miles: newMiles, 
        Gallons: newGallons,
        Mileage: newMileage};
    Cities.push(appendCity);
    document.getElementById('message').innerHTML = `Data for ${newCity} has been added!`;
    
}
//assign function to clear form values to the Clear button
const clearInput = document.getElementById("clearData");
clearInput.addEventListener('click', clearFormValues);
//function to clear form 
function clearFormValues(){
//assign an empty string to form values
    document.getElementById("newCity").value = '';
    document.getElementById('newMiles').value = '';
    document.getElementById('newGallons').value = '';
}

let showData = document.getElementById('generateTable');
showData.addEventListener('click', displayTable); //event listener to add function to display the data table when the button is clicked.

function displayTable(){
    let dataTable = document.getElementById('table'); //identify table element
    dataTable.innerHTML = ''; //prevent displaying the table repeatedly

    //create the header row
    let tableHeader = dataTable.createTHead(); //create the thead element and append to the table
    let header = tableHeader.insertRow(-1); //add the header row to the table

    //populate the header row with object keys of the city object
    const headerNames = Object.keys(Cities[0]); //get header names from keys of the first object in the Cities array
    for(let i=0; i<headerNames.length; i++){  //loop over the header names
        let headerCell = document.createElement('th') //create a th element
        header.appendChild(headerCell); //insert a th in the header row
        let headerText = document.createTextNode(headerNames[i]) //create a text node fro each header name;
        headerCell.appendChild(headerText); //add header name to th element
    }
    //create and populate a data row for each city
    for(let i=0; i<Cities.length; i++){ 
        //loop through the items in the Cities array
        let newRow = dataTable.insertRow(-1); 
        //insert a new row for each city in the Cities array as the last row
        let cityData = Object.values(Cities[i]); 
        //extract the values from each city object in the Cities array into a new array so we can loop over it

        for(j=0; j<cityData.length; j++){ 
            //loop over the data for each individual city
            let newCell = newRow.insertCell(j); 
            //insert a new cell for each data value for the  individual city
            let cellText = document.createTextNode(cityData[j]);
            //populate the cell with the data
            newCell.appendChild(cellText);
        }
    }

}


