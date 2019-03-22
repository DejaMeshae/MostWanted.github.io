"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/
let people=data;

//   function search(nameKey, myArray){
//     for (let i=0; i < myArray.length; i++) {
//         if (myArray[i].name === nameKey) {
//           console.log(myArray[i]);
//             return myArray[i];
//         }
//     }
// }

// // search("Bob",array);



// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      var foundperson = searchByName(people);
      mainMenu(person, people);
      break;
    case "no": 
    searchByGender(people);
      // TODO: search by traits
      break;
      default:
    app(people); // restart app
      break;
      
  }
} 


function findParentsById(data, id) {
  let i;
    for( i=0; i < data.length; i++) {
        if (data[i].parents[0] === id) {
          console.log(data[i].firstName+' '+data[i].lastName);
          findParentsById(people, data[i].id);
        }
        else if(data[i].parents[1] === id) {
          console.log(data[i].firstName+' '+data[i].lastName);
          findParentsById(people, data[i].id);

        }  
        else{
        }
    }
}

// let arr = [
//     { name:"string 1", value:"this", other: "that" },
//     { name:"string 2", value:"this", other: "that" }
// ];

// let obj = arr.find((o, i) => {
//     if (o.name === 'string 1') {
//         arr[i] = { name: 'new string', value: 'this', other: 'that' };
//         return true; // stop searching
//     }
// });

// console.log(arr);


findParentsById(people, 693243224)

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
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  var foundName = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
      //promptFor("Do you know the person height?", chars);
    }
    else if(person.firstName === firstName){
      return true;
    }
    else if(person.lastName=== lastName){
        return true;
        }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundName;
}


  


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




function getAge(dateString) 
{
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
// function that prompts and validates user input
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


function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(age);
    return age;
}


//Test test

// data.map(function(el){
//   el=data.height;
//   console.log(data.height);
//   return el=data.height});

function getHeight(heightStringFeet, heightStringInches){
  let feet=heightStringFeet*12;
  let inches=heightStringInches*1;
  let height=feet+inches;
  console.log(height);
  return height
}
