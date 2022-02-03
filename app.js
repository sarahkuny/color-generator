const button = document.getElementById('button');
const hex = document.getElementById('hex');

const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function randomNumber() {
    return Math.floor(Math.random() * hexArray.length)
};

button.addEventListener('click', function(){
    let hexKey = '#';
    for (let i = 0; i < 6; i++){
        let number = randomNumber();
        hexKey += hexArray[number];
    }

    document.body.style.backgroundColor = hexKey; //change color of page
    hex.innerHTML = hexKey; //change written hex text

    let firstChar = parseInt(hexKey.charAt(1));    
    firstChar <= 9 ? textColor = "white" : textColor = "black";
    hexText.style.color = textColor //change text color dependent on background color
    
})

