
const comments = [];

let btn = document.querySelector('button');
let input = document.querySelector('input');

btn.onclick = () => {
    let value = input.value;
    console.log(value)
    comments.push(value);
    draw();
    input.value = '';
    
}

function draw() {
    let out = '';
    for (let i = 0; i < comments.length; i++) {
        out += `<li>${comments[i]}</li>`
    }
    document.querySelector('ul').innerHTML = out;
    
}
