const input = document.getElementById('button');

function addingEventListener() {
    console.log("I was clicked man");
    alert('I was clicked!');
    input.addEventListener('click', addingEventListener);
}




