function getStr() {
    let inputStr = document.getElementById('str').value;
    let rNum = (Math.floor(Math.random() * inputStr.length) + 1);
    let strHalf = inputStr.length/2;
    let sCharacter = inputStr.charAt(rNum);
console.log(rNum);
    if(rNum>strHalf) {
        document.getElementById('strText').innerHTML ='This letter is in the second half of the string: ' + sCharacter;
    } else if (rNum==strHalf) {
        document.getElementById('strText').innerHTML ='This letter is in the middle of the string: ' + sCharacter;
    } else {
        document.getElementById('strText').innerHTML = "This letter is in the first half of the string: " + sCharacter;
    }
}