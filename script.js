let input = document.getElementById('intputBox');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.form(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innereHTML =='=') {
            string = eval(string);
            input.value = string;
            }
            else if(e.targect.innereHTML == 'AC'){
                string ="";
                input.value = string;
            }
            else if(e.targect.innereHTML == 'DLE'){
                string = string.substring(0, string.length-1);
                input.value = string;
            }
            else{
                string += e.targect.innereHTML;
                input.value = string;
            }
    })
})

// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll
// ('button');
// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
// button.addEventListener('click', (e) => {
// if(e.target.innerHTML == '='){
// string = eval(string);
// input.value = string;
// }
// string += e.target.innerHTML;
// input.value = string;
// })
// })
