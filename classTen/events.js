//HTML Event Handler

function oldSchool() {
    //Print Text under Event Handler bullet point
    document.getElementById('htmlEH').innerText = "This is bad practice. Don't use this one."
}

//Traditional DOM Handler

function tradText() {
    //Put Text under bullet point
    document.getElementById('traditional').innerText = "You can only attach ONE function to this handler."
}

document.getElementsByTagName('input')[1].onclick