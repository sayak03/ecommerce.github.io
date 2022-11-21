const bar = document. getElementById('bar');
const close = document. getElementById('close');
const nav = document. getElementById('navbar');

if(bar){
	bar.addEventListener('click', () =>{
		nav.classList.add('active');
	})
}
if(close){
	close.addEventListener('click', () =>{
		nav.classList.remove('active');
	})
}

// cart working js
if(document.readyState == "loading"){
	document.addEventListener("DOMContentLoaded",ready);
}else{
	ready();
}

// making Function
function ready(){
	// Remove Items from Cart
	var removeCartButtons = document.getElementsByClassName('fa-times-circle')
	console.log(removeCartButtons)
	for(var i = 0; i< removeCartButtons.length; i++){
		var button = removeCartButtons[i]
		button.addEventListener('click' , removeCartItem);
	}
}

function removeCartItem(event){
	var buttonClicked = event.target;
	buttonClicked.parentElement.remove();
}