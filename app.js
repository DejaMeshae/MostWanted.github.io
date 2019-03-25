"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/
let people=data;




// app is the function called to start the entire application
function app(people){
  getAge(people);
  var searchType;
   searchType = promptFor("Do you know the name of the person you are looking for? Please enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){           ///////fuction to slice and cap first character add that in later////
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

  //Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want.

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
    displayFamilymembers(data,id,type)   ////get person's family
    break;
    case "descendants":
    findDesendents(data, id);           //displays desendents not finish still working it 
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    alert("Thank you for using our search engine!", chars);
    return app(people);
    default:
  }
  var searchComplete = promptFor("Would you like more info on that person or are you finished with your search? Please enter 'yes' for more info or 'no' for im finished", yesNo).toLowerCase();
  switch(searchComplete){
    case 'yes':
      return mainMenu(person, people);  /////loops back to displayOption line 56 
    case "no": 
    alert("Thank you for using our search engine!", chars);
    break;///////creates an infinate loop figure out how to end it 
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


///shows list then comes back undefinded fix it.
function searchByGender(people){
  var inputGender = promptFor("Is the person male or female?", chars);
  //let i;

  //for(i=0; i < people.length; i++) 
  var foundGender = people.filter(function(person){
    if(person.gender === inputGender){
      displayPerson(person);   //display a list of male or females names or function in an array where it'll work with any names 
      mainMenu(person, people); /////then search by 2-5 filter refine search further
      searchByEyeColor(people); //follow up with eye color to narrow the search down even further
    }
    else{
      searchByGender(people)
      return false;
    }
  })
  // TODO: find the person using the gender they entered
  return foundGender; 
}



///issues with age: 
function searchByAge(people){
  var userInputForAge = promptFor("Enter the person's age?", chars);


  var foundPersonByAge = people.filter(function(el){
    if (userInputForAge == el.age){ 
      displayPerson(el); 
      //mainMenu(person, people); /////then search by 2-5 filter refine search further
      return true;  
    } 
    else{ 
      return false;
    }
  });

 if (foundPersonByAge.length == 1) {
 mainMenu(foundPersonByAge, people)
 }
 else if (foundPersonByAge.length > 1) {
   app(foundPersonByAge)
 } 
 else{

 }
return foundPersonByAge;
}







function searchByHeight(people){
  var userInputHeight = promptFor("How tall is the person you're looking for?", chars);
  
  var foundHeight = people.filter(function(person){
    if(getHeight(person.height) == userInputHeight){
      displayPerson(person);
      mainMenu(person, people); /////then search by 2-5 filter refine search further
      return true;
    }
    else{
      return searchByHeight(people);
    }
  })
  // TODO: find the person using the height they entered
  return foundHeight[0];
}

//Works! done but if theres 2 people that weigh the same figure how to choose that one person
//issues with weight: work on arrays not functions in a function/// so a list of the people who match the critera pops up 
function searchByWeight(people){
  var inputWeight = promptFor("How much does the person weigh?", chars);

  var foundPersonByWeight = people.filter(function(person){
    if(person.weight == inputWeight){
      displayPerson(person); /////then search by 2-5 filter refine search further
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the weight they entered
  return foundPersonByWeight[0]; 
}

  
//works! this function is done but add more refine search further
function searchByEyeColor(people){
  var inputEyeColor = promptFor("What color is the person eyes?", chars);
  
  var foundEyeColor = people.filter(function(person){
    if(person.eyeColor === inputEyeColor){
      displayPerson(person);  /////then search by 2-5 filter refine search further
      mainMenu(person, people);  //work on display list with prompt then main menu prompt who would you like to know more about
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the color they entered
  return foundEyeColor;
}

/////works! this function is done but add more refine search further
function searchByOccupation(people){
  var inputOccupation = promptFor("What is the person's occupation?", chars);

  var foundOccupation = people.filter(function(person){
    if(person.occupation === inputOccupation){
      displayPerson(person);
      mainMenu(person, people); /////then search by 2-5 filter refine search further
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the color they entered
  return foundOccupation;
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
function getAge(people) {
  people.map(function(el){
    let today = new Date();
    let birthDate = new Date(el.dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(age);
    el.age = age;
  });
}


////Height function
function getHeight(heightStringFeet, heightStringInches){
  let feet=heightStringFeet*12;
  let inches=heightStringInches*1;
  let height=feet+inches;
  console.log(height);
  return height
}

//getHeight(6,2)

//getHeight('6','2')

////////idea: for the get age function we can do people.age = getAge(dateString) function///////

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
