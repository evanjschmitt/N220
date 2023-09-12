let grades = [78, 86, 92, 77];
var ansText = document.getElementById("answers");

ansText.innerHTML = "1. Array: " + grades; //Question One
ansText.innerHTML += "<br>2. Second Value: " + grades[1]; //Question Two
grades[1] = 83; //Question Three                            
ansText.innerHTML += "<br> 4. Second Array: " + grades; //Q4
ansText.innerHTML += "<br> 5. Array Length: " + grades.length; //Q5
let lastGrade = grades.length-1; //3
let changeLastGrade = ++grades[lastGrade]; //77 + 1 = 78
//NOTE: You could combine the two steps above and type:
//++grades[grades.Length-1]
ansText.innerHTML += "<br> 6. New Grade: " + changeLastGrade
ansText.innerHTML += "<br> 7. Last  Value: " + grades[3];
let gradeTotal = grades[0] + grades[1] + grades [2] + grades[3];
ansText.innerHTML += "<br> 9. Average Grade: "+ (gradeTotal/grades.length);
ansText.innerHTML += "<br> 10. Is the average above 80? " + " " + ((gradeTotal/grades.length)>80);


let tops = ["tshirt", 'blouse', 'tanktop', 'button-up', 'sweater', 'sweatshirt'];
let bottoms = ['slacks', 'jeans', 'shorts', 'sweatpants'];
let outfits = [tops, bottoms];
document.write(outfits[0][4], outfits[1][1]);

//Add Value To End
tops.push('hoodie');
var eaText = document.getElementById("extraAnswers");
eaText.innerHTML = "1. Array after push: " + tops;
//Remove End Value
tops.pop();
eaText.innerHTML += "<br> 2. Array after pop: " + tops;
//Remove First Value
tops.shift();
eaText.innerHTML += "<br> 3. Array after shift: " + tops;
//Add Value To Front
tops.unshift("t-shirt");
eaText.innerHTML += "<br> 4. Array after unshift: " + tops;
//Removing Third Value
tops.splice(2, 1);
eaText.innerHTML += "<br> 5. Array without third: " +tops;
//Adding Blouse and Hoodie After Button Up (Splicing)
//Putting 3 because we want it to start AFTER button up
tops.splice(3, 0, "blouse", "hoodie")
eaText.innerHTML += "<br> 6. Array after add splice: " + tops;
//Add/Remove ANY Value (Targeting Blouse in this example)
tops.splice(1, 1);
eaText.innerHTML += "<br> 7. Array after remove splice: " +tops;


//Objects
const friend = {
    fName: "William",
    lName: "Shakespeare",
    age: 23,
    hometown: "Stratford",
    fullName: function() {
        return this.fName + " " + this.lName;
    }
}
friend.hometown = "Charlesville"
document.getElementById("fullName").innerHTML = "My friend's name is " + friend.fullName() + ", and he was born in " + friend.hometown;
