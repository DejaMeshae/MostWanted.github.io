"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/
let people=data;




// app is the function called to start the entire application
function app(people){
  var searchType;
   searchType = promptFor("Do you know the name of the person you are looking for? Please enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      var foundName= searchByName(people);
      mainMenu(foundName, people);
      break;
    case "no": 
  }
    var searchTrait = prompt("Please enter the trait you would like to search by: \r\n First Name \r\n Last Name \r\n Gender \r\n Age \r\n Height \r\n Weight \r\n Eye color \r\n Occupation").toLowerCase();
    switch(searchTrait){
      case 'gender':
        var foundGender= searchByGender(people);
        mainMenu(foundGender, people);
        break;

      case 'age':
        var foundPersonByAge= searchByAge(people);         
        mainMenu(foundPersonByAge, people);
        break;

      case 'height':
        var foundPersonByHeight= searchByHeight(people);
        mainMenu(foundPersonByHeight, people);
        break;

      case 'weight':
        var foundPersonByWeight= searchByWeight(people);
        mainMenu(foundPersonByWeight, people);
        break;

      case "eye color": 
        var foundEyeColor= searchByEyeColor(people);
        mainMenu(foundEyeColor, people);
        break;
      
      case "occupation":
        var foundOccupation= searchByOccupation(people);
        mainMenu(foundOccupation, people);
        break;
          // TODO: search by traits
        default:
    app(people); // restart app
      break;   
  }
} 

function compareParentsById(data,id){
  let i;
  for(i=0;i<data.length;i++){

    if(data[i].parents[0] === id.parents[0]||data[i].parents[1]=== id.parents[0]){
      console.log(data[i].firstName+' '+data[i].lastName);
    }
    else if(data[i].parents[0] === id.parents[0]||data[i].parents[1]=== id.parents[0]){
      console.log(data[i].firstName+' '+data[i].lastName);
    }
  else{
  }
}
}
// compareParentsById(people, people[10])

function test(data,id,type){
  //type=type.toString
  console.log(data[id][type])
}

test(people,0, "dob");

function displayFamilymembers(data,id,type){
     let i;
   for(i=0;i<data.length;i++){
    if (data[i][type]===[]||data[i][type]===null){
    }
    else if (data[i][type]===id.id||data[i][type]===id.id){
       console.log(data[i].firstName+' '+data[i].lastName);
     }
     else{
     }
  }
}

displayFamilymembers(people,people[11],'currentSpouse')

// function findFamilyMembersById(data,index,section, type){
//   let i;
//   for(i=0;i<data.length;i++){
//     if(data[i][type]===[]||data[i][type]===null){

//     }
//     else if (data[i][type]===index[section]||data[i][type]===index[section]){
//       console.log(data[i].firstName+' '+data[i].lastName);
//     }
//     else{
//   }
// }
// }


function findDesendents(data, id) {
  let i;
    for( i=0; i < data.length; i++) {
        if (data[i].parents[0] === id) {
          findDesendents(people, data[i].id);
        }
        else if(data[i].parents[1] === id) {
          findDesendents(people, data[i].id);

        }  
        else{
        }
}
}

// findDesendents(people, 693243224)

//test to commit
// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual, please search again.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);  ///displays person info 
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
    alert("Thank you for using our search engine!", chars);
    return app(people) ////////////goes back to restart Do you know their name 
    default:
  }
  var searchComplete = promptFor("Would you like more info on that person or are you finished? Please enter 'yes' for more info or 'no' for im finished", yesNo).toLowerCase();
  switch(searchComplete){
    case 'yes':
      return mainMenu(person, people);  /////loops back to displayOption line 56 
    case "no": 
    alert("Thank you for using our search engine!", chars);
    break///////creates an infinate loop figure out how to end it 
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  let i;

  for(i=0; i < people.length; i++)   /////creates an infinate loop figure out how to end it 
  var foundName = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      displayPerson(person);
      mainMenu(person, people);
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
  return foundName[0];
}



<<<<<<< HEAD
function searchByGender(people){
  var inputGender = promptFor("Is the person male or female?", chars);
  //let i;

  //for(i=0; i < people.length; i++) 
=======

// function searchByGender(){
//   var inputGender = promptFor("Is the person male or female?", chars);
//   let i;

function searchByGender(){
  var inputGender = promptFor("Is the person male or female?", chars);
  let i;
  for(i=0; i < people.length; i++) 
>>>>>>> bc18cc0c3cfb7934eb158703ddf291dc0f4a87e5
  var foundGender = people.filter(function(person){
    if(person.gender === inputGender){
      displayPerson(person); //////create a list that displays with all info in one box/like alert but not 
      
      return true;
    }
    else{
      //alert("Have you found the person you're looking for? click okay to return to the start.")
      return false;
    }
  })
  // TODO: find the person using the gender they entered
  return foundGender; ////added for loop but only goes through the first person
}



/////////Age  search function 
////not poping up person who matches age work on that
function searchByAge(people){
  var userInputForAge = promptFor("Enter the person's age", chars);
  let i;

  for(i=0; i < people.length; i++)
  if(userInputForAge === getAge(person[i].dob)){

  var foundPersonByAge = people.filter(function(person){
    if(getAge(dateString) = person[i].age){
      displayPerson(person);
      mainMenu(person, people);
      return true;              
    }
    else{ 
      alert('Please enter an age and try again');
      return false;
    }
  })
  // TODO: find the person using the birthday they entered
  return foundPersonByAge;
}
}

////not poping up person who matches age height on that
function searchByHeight(people){
  var userInputHeight = promptFor("How tall is the person you're looking for?", chars);
  let i;

  for(i=0; i < people.length; i++)
  if(userInputForHeight === getHeight(person[i].height)){

  var foundHeight = people.filter(function(person){
    if(person.height === userInputHeight){
      return true;
    }
    else{
      alert("Please enter height measured in feet")
      return searchByHeight(people);
    }
  })
  // TODO: find the person using the height they entered
  return foundHeight;
}
}


function searchByWeight(people){
  var inputWeight = promptFor("How much does the person weigh?", chars);

  var foundPersonByWeight = people.filter(function(person){
    if(person.weight === inputWeight){
      displayPerson(person);
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the weight they entered
  return foundPersonByWeight;
}
  
//works! this function is done
function searchByEyeColor(people){
  var inputEyeColor = promptFor("What color is the person eyes?", chars);

  var foundEyeColor = people.filter(function(person){
    if(person.eyeColor === inputEyeColor){
      displayPerson(person);
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the color they entered
  return foundEyeColor[0];
}


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
    
  }).join("\n"));
}


function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n"; 
  personInfo += "gender: " + person.gender + "\n"; 
  personInfo += "Date of Birth: " + person.dob + "\n"; 
  personInfo += "Height: " + person.height + "\n";
  personInfo += "weight: " + person.weight + "\n"; 
  personInfo += "Eye Color: " + person.eyeColor + "\n"; 
  personInfo += "Occupation: " + person.occupation + "\n"; 
  // DONE YAY! Display the object in the array. if user were to click info///////
  alert(personInfo);
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

///////Age function
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


////Height function
function getHeight(heightStringFeet, heightStringInches){
  let feet=heightStringFeet*12;
  let inches=heightStringInches*1;
  let height=feet+inches;
  console.log(height);
  return height
}

getHeight(6,2)

getHeight('6','2')

////////idea: for the get age function we can do people.age = getAge(dateString) function///////

<<<<<<< HEAD

  
=======
// function searchByHeight(people){
//   var inputHeight = promptFor("How tall is the person you're looking for?", chars);

//   var foundHeight = people.filter(function(person){
//     if(person.height === inputHeight){
//       return true;
//     }
//     else{
//       alert("Please enter height measured in feet")
//       return searchByHeight(people);
//     }
//   })
//   // TODO: find the person using the height they entered
//   return foundHeight;
// }
>>>>>>> bc18cc0c3cfb7934eb158703ddf291dc0f4a87e5
