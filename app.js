"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      var foundHeight = searchByName(people);
      mainMenu(foundHeight, people);
      break;
    case "no": 
    searchByGender(people);
      // TODO: search by traits
      break;
      default:
    app(people); // restart app
      break;
      ////thing
  }
} 
//test to commit

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.inputHeight + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var inputHeight = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  var foundHeight = people.filter(function(person){
    if(person.inputHeight === inputHeight && person.lastName === lastName){
      return true;
      //promptFor("Do you know the person height?", chars);
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundHeight;
}

///////WORKING ON THIS TO SEARCH BY HEIGHT////// get to to where they can search by height
//////create an array for the heights then filter/sort through
//////////map [x] then do an array of that min height = [0] min height [-1]. Make an array of objects///
/*function searchByHeight(people){
  var inputHeight = promptFor("What is the person's height?", chars);

   //= people.map([0] < );

  const map1 = array1.map(x => x * 2);
function 

  var foundHeight = people.filter(function(person){
    if(person.inputHeight > [0]){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundHeight;
}*/
  


function searchByGender(people){
  var inputGender = promptFor("Is the person a male or female?", chars);

  var foundGender = people.filter(function(person){
    if(person.gender === inputGender){
      //mainMenu(person, people);?? to get to diplay males or female based on user input 
      return true;
      //promptFor("What is the person's gender?", chars);
    }
    else{
      alert("Please enter male or female")
      return searchByGender(people);
    }
  })
  // TODO: find the person using the gender they entered
  return foundGender;
}
  


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.inputHeight + " " + person.lastName;
  }).join("\n"));
}


function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.inputHeight + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  var PersonHeight = "" 
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input///////USE FOR TO ASK QUESTIONS 
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
