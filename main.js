let inputEl = document.querySelector('.inputEl');
let submitEl = document.querySelector('.submitEl');
let show = document.querySelector('.show');
let form = document.querySelector('form');
let result = document.querySelector('#complete ul');


let createTask = function(task){

	let elementLi = document.createElement('li');

	let checkboxEl = document.createElement('input');

	checkboxEl.type = 'checkbox';

	let label = document.createElement('label');

	label.innerText =  task;

	elementLi.appendChild(checkboxEl);

	elementLi.appendChild(label);

	return elementLi;

}


let addTask  = function(event){

	event.preventDefault();

	let listItem = createTask(inputEl.value);

	show.appendChild(listItem);

	inputEl.value = "";

	bindChangeEvent(listItem , completeTask);

}


let bindChangeEvent = function(list , call){

	let checkboxEl = list.querySelector('input[type=checkbox]');

	checkboxEl.onchange = call;

}



let completeTask = function(){

	let parentEl = this.parentNode;

	let button = document.createElement('button');

	button.innerText = 'DELETE';

	button.className = 'delete';

	parentEl.appendChild(button);

	let checkbox = parentEl.querySelector('input[type=checkbox]');

	checkbox.remove();


	result.appendChild(parentEl);


	bindDeleteBtn(parentEl , deleteItems)


}

let bindDeleteBtn = function (item, call){

	let button = item.querySelector('.delete');

	button.onclick = call;

}


let deleteItems = function(){
	
	let parent = this.parentNode;

	parent.remove();

}

form.addEventListener('submit', addTask)