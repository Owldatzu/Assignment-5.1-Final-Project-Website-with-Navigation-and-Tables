// These are all the inputs the user needs to fullfill
function checkCreds()
{
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var badgeNum = document.getElementById("badgeID").value;
    // concatenate
    var fullName = firstName+ " " + lastName;

    if (fullName.length > 20 || fullName.length< 3)
    {
        document.getElementById("loginStatus").innerHTML = "full name too long or too short";
    }
// This is to check if there's 5 numbers by having the biggest and tiniest 5 digit numbers
    else if (badgeNum>99999  || badgeNum<10000)
    {
        document.getElementById("loginStatus").innerHTML = "Zip code num needs to be 5 characters"
    }

   // else if (badgeNum.length  !=3)
 //   {
 //       document.getElementById("loginStatus").innerHTML = "Badge is incorect";
//    }

//This is where the system recognizes the user's input and let's them continue
    else 
    {
        alert("Access Granted!")
        alert('Welcome ' + firstName)
        location.replace("Assignment_5.1_NavAndTables_Diego.html");
    }
        
}

// nav to the home page
function homePage()
{
    location.replace("Assignment_5.1_NavAndTables_Diego.html");
}