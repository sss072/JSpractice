let count = 0;
let test = document.getElementById('header');
test.innerText = count;
let paragraph = document.getElementById('paragraph');
paragraph.innerHTML = "Last entry was"

function increment() {
    count += 1
    test.innerText = count
}

function save() {
    paragraph.innerHTML += ' ' + count
    
}






