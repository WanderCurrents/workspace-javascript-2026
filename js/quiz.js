function randInt(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

// console.log(randInt(100,200));

// --Generate the random numbers
let M = randInt(500,700);
document.getElementById("M").textContent = M.toString();
let N = randInt(50,200);
document.getElementById("N").textContent = N.toString();
let K = randInt(1,10);
document.getElementById("K").textContent = K.toString();

// --Update answer selection
document.querySelector('[value="1"]').nextSibling.nodeValue=M.toString()+"-"+N.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue=M.toString()+"+"+N.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue=M.toString()+"-"+N.toString()+"-"+K.toString();
document.querySelector('[value="4"]').nextSibling.nodeValue=M.toString()+"-"+N.toString()+"+"+K.toString();

// --Changing style of the answer block --- click --- selected to unselected/unselected to selected
function changeStyle(event) {  //checkbox has default behavior in HTML
    event.preventDefault();
    // console.log(this.getAttribute('class'));    //This refers to the object that called the function

    let classname = this.getAttribute('class');
    if(classname == "answer") {
        classname = "answer selected";
    } else if(classname == "answer selected") {
        classname = "answer";
    } else {
        classname = "answer"
        console.log("ERROR: selecting answer; defaulted to answer class");
    }

    this.setAttribute("class", classname);
}
//-Old way
// document.getElementsByClassName('answer')[0].addEventListener('click', changeStyle);
// document.getElementsByClassName('answer')[1].addEventListener('click', changeStyle);
// document.getElementsByClassName('answer')[2].addEventListener('click', changeStyle);
// document.getElementsByClassName('answer')[3].addEventListener('click', changeStyle);

//-Loop way
for(i=0; i<document.getElementsByClassName('answer').length; i++) {
    document.getElementsByClassName('answer')[i].addEventListener('click', changeStyle);
}

// OPTIONAL