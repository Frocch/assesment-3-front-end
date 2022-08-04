console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submited succesfully.');
}


function mousoverCat() {
	alert('Thanks for the petting!')
}

let form = document.querySelector('#contact');
let img = document.querySelector('#catImg')

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', mousoverCat)