let textField = document.getElementById('our-text');
let countBtn = document.getElementById('count-btn');
let clearBtn = document.getElementById('clear-btn');
let showCountWord = document.getElementById('word-result');
let showCountChar = document.getElementById('char-result');

//Funtion to Count the Word and characters
countBtn.addEventListener("click",function(){
    //here trim method removes extra space after and before.
    let trimmdedTextValue = textField.value.trim();
    //here split method gives us a new array splitting with space
    let splitText = trimmdedTextValue.split(" ");
    //Taking length, As array length will be our total words
    let splitTextlength = splitText.length;
    //showing output
    showCountWord.innerText = splitTextlength;

    //Finding Total character, here we are trimmed text length as well
    let totalChar = trimmdedTextValue.length;
    //Showing Output
    showCountChar.innerText = totalChar;

    
})

