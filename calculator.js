
	let calcBtn = document.querySelector('.calcBtn');

	let display = document.querySelector('.display');

	let html = '';

	let calculatorDigit = function(value){

		let parentNodeDiv = document.createElement('div');

		let inputEl = document.createElement('input');

		parentNodeDiv.className = 'col-md-3 mt-3 text-center';

		inputEl.type= 'submit';

		inputEl.className = 'btn btn-primary inputEl';
		
		inputEl.value = value;

		parentNodeDiv.appendChild(inputEl);
		
		return parentNodeDiv;

	}


	let bindClickEvent = function(i){

		let element = calculatorDigit(i)

		calcBtn.appendChild(element)

		if(i == '='){

			dispalayNumber(element , printAddition);

		}else if(i == 'clear'){

			dispalayNumber(element , clearDisplay);

		}else{

			dispalayNumber(element , addNumber);
		}

	}


	let clearDisplay = function(){

		display.value = '';

	}




	let addNumber = function(){

		let inputVal = this.value;

		display.value += inputVal;

		return this;
	}


	let dispalayNumber = function(el , call){

		let element = el.querySelector('input[type=submit]');
		
		element.onclick = call;


	}

	let printAddition = function(){

		let value = display.value;

		let newArray = [];

		let summation = 0; 

		if(value.includes('*')){

			newArray = value.split('*');

			summation = newArray.reduce((a,b) => parseInt(a) * parseInt(b));

		}else if(value.includes('/')){

			newArray = value.split('/');

			summation = newArray.reduce((a,b) => parseInt(a) / parseInt(b));

		}else if(value.includes('-')){

			newArray = value.split('-');

			summation = newArray.reduce((a,b) => parseInt(a) - parseInt(b));

		}else{

			newArray = value.split('+');

			summation = newArray.reduce((a,b) => parseInt(a) + parseInt(b));
		}

		display.value = summation;


	}


	for (var i = 0; i < 16; i++) {

		if(i === 10){
			bindClickEvent('+')
		}else if(i === 11){
			bindClickEvent('=')
		}else if(i === 12){
			bindClickEvent('clear')
		}else if(i === 13){
			bindClickEvent('-')
		}else if(i === 14){
			bindClickEvent('*')
		}else if(i === 15){
			bindClickEvent('/')
		}else{
			bindClickEvent(i)
		}
	}
