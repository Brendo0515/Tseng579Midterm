const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here
clickCountButton.addEventListener("click", update)

function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

let number = 0;
function update(){
    number +=1;
    clickCountButton.textContent = "You clicked the button " + number + " time" + addS(number);
}