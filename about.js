console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catpic = document.querySelector("#catpic")
function compliment() {
	alert("wow! you are so attractive!")
}
catpic.addEventListener("mouseover", compliment)