function set(){
	//console.log('Du klickade');
	let elements = document.getElementsByName('cssProperty');
	
	for(let index=0;index<elements.length;index++){
		
		let cssProperty = elements[index].getAttribute('id');
		
		let cssValue = elements[index].value;
		//console.log(cssProperty, cssValue);
		
		let div = document.getElementById('rutan');
		
		div.style[cssProperty] = cssValue;
		

	}
}
function reseta(){
	let start = ["#438ddb","300px","300px"];
	let elements = document.getElementsByName('cssProperty');
	for(let index=0;index<elements.length;index++){
		
		let cssProperty = elements[index].getAttribute('id');
		
		let cssValue = start[index];
		//console.log(cssProperty, cssValue);
		
		let div = document.getElementById('rutan');
		
		div.style[cssProperty] = cssValue;
		

	}
	
}
document.getElementById('set').addEventListener('click',set);
document.getElementById('reseta').addEventListener('click',reseta);

