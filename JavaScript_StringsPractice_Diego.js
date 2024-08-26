// This function will check if the user wrote a palin by splitting, reversing and joining the word.
function reverse()
{
    var str1 = document.getElementById("firstStr").value;
    var splitStr1 = str1.split("");
    alert("split = " + splitStr1);
    var reverse = splitStr1.reverse();
    alert("reverse = " + reverse);
    var joinStr1 = reverse.join("");
    alert("join = " + joinStr1);
// Here it'll check if the reveresed word is equal to the first word the user wrote.
    if (str1 == joinStr1)
    {
        document.getElementById("palin").innerHTML = "This is a palindrome!  Enter another one.";
    }
    else 
    {
        document.getElementById("palin").innerHTML = "This is NOT a palin :(";
    }


    var sub = "";
    str1.substring(0,3);
  //  alert("str1 substring 0,3 = " + sub);

    var sub2 = "";
    sub2 = str1.substring(3,5);
  //  alert ("str1 stubstr 3 5 = " + sub2);

  //Here it'll make the string into an all caps word.
    str1 = str1.toUpperCase();
    sub = str1.toUpperCase();
    alert ("all caps " + sub);
   // sub2 = str1.replace(/qwe/i, "asd");
  //  alert("replace qwe with asd " + sub2);


}
//User is done inputing words and will get a reset and bye from the page
  function imDone()
  {
    alert("Thanks for participating!")
    document.getElementById("firstStr").value = "";
    document.getElementById("palin").innerHTML = "Bye!";
  }

// This new function is to check for the correct work inputted 
  function animalCheck()
  {
//Later I reference this
    var animalName = document.getElementById("animalName").value;

    if (document.getElementById("animalName").value == "Elephant")
      {
          document.getElementById("anim").innerHTML = "Correct this is an Elephant!";
      }
//Here I needed to get the var animalName a valid id in the JavaScript, which ended up being animalName
      else 
      {
          document.getElementById("anim").innerHTML = ('NO! This is NOT a ' + animalName);
      }
  }
 
   // function reverse2()
  //  {
       // alert("4");
      //  let reversed = "";
      //  for (let i = str1.length - 1;  i >=0; i--)
      //  {
      //      reversed += str1(i); // reveresed = reversed + str1(i)
      //  }
     //   alert("reversed string using loops = " + reversed);
   // }

   
