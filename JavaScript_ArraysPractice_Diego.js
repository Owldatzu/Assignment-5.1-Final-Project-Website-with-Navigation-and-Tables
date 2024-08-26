function arrayExample()
{
    var arrayOfNames = ["Julius", "Joe", "Killiam", "Sam"];
    // alert(arrayOfNames[2]);

    // add Paula to array
    arrayOfNames.push("Paula");
    arrayOfNames.push("Joy");

    arrayOfNames.reverse();
    arrayOfNames.sort();
    for (i = 0; i < arrayOfNames.length; i++)
        {
            var str1 = arrayOfNames[i];
            // document.getElementById("updates").innerHTML = "name = " + str1 + " i = " + 1;
            alert ("name = " + str1 + " i = " + i);
        }

      // alert(arrayOfNames.find("Joy"));
      //alert
}